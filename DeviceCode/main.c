#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#include "shell.h"
#include "msg.h"
#include "net/emcute.h"
#include "net/ipv6/addr.h"
#include "thread.h"
#include "xtimer.h"
#include "periph/adc.h"
#include "periph/gpio.h"
#include "analog_util.h"

#include "net/gnrc/netif.h"
#include "net/gnrc/netapi.h"
// #include "net/gnrc/ipv6/netif.h"
// #include "net/gnrc/wifi.h"
#include "net/netif.h"
#include "net/wifi.h"
#include "esp_wifi.h"

#include "humidity_sens.h"
#include "pump_controls.h"


#ifndef EMCUTE_ID
#define EMCUTE_ID           ("device0")
#endif
#define EMCUTE_PRIO         (THREAD_PRIORITY_MAIN - 1)

#define NUMOFSUBS           (16U)
#define TOPIC_MAXLEN        (64U)

#define ADC_IN_USE          ADC_LINE(0)
#define ADC_RES             ADC_RES_12BIT
#define DELAY               (100LU * US_PER_MS) /*100ms*/
#define DELAY2              (60LU * MIN_PER_HOUR) /*60min*/
#define DELAY30             (30LU * MIN_PER_HOUR) /*30 min*/
#define DELAY2DAYS          (2LU*MS_PER_HOUR*HOURS_PER_DAY)/*2 days*/

#define GPIO_LINE           GPIO_PIN(0,22)


static char stack[THREAD_STACKSIZE_DEFAULT];
static msg_t queue[8];

static emcute_sub_t subscriptions[NUMOFSUBS];
static char topics[NUMOFSUBS][TOPIC_MAXLEN];

static void on_pub(const emcute_topic_t *topic, void *data, size_t len)
{
    char *in = (char *)data;

    printf("### got publication for topic '%s' [%i] ###\n",
        topic->name, (int)topic->id);
    for (size_t i = 0; i < len; i++) {
        printf("%c", in[i]);
    }
    puts("");

}

static unsigned get_qos(const char *str)
{
    int qos = atoi(str);
    switch (qos) {
        case 1:     return EMCUTE_QOS_1;
        case 2:     return EMCUTE_QOS_2;
        default:    return EMCUTE_QOS_0;
    }
}

static int cmd_con(int argc, char **argv)
{
    sock_udp_ep_t gw = { .family = AF_INET6, .port = CONFIG_EMCUTE_DEFAULT_PORT };
    char *topic = NULL;
    char *message = NULL;
    size_t len = 0;

    if (argc < 2) {
        printf("usage: %s <ipv6 addr> [port] [<will topic> <will message>]\n",
                argv[0]);
        return 1;
    }

    /* parse address */
    if (ipv6_addr_from_str((ipv6_addr_t *)&gw.addr.ipv6, argv[1]) == NULL) {
        printf("error parsing IPv6 address\n");
        return 1;
    }

    if (argc >= 3) {
        gw.port = atoi(argv[2]);
    }
    if (argc >= 5) {
        topic = argv[3];
        message = argv[4];
        len = strlen(message);
    }

    if (emcute_con(&gw, true, topic, message, len, 0) != EMCUTE_OK) {
        printf("error: unable to connect to [%s]:%i\n", argv[1], (int)gw.port);
        return 1;
    }
    printf("Successfully connected to gateway at [%s]:%i\n",
           argv[1], (int)gw.port);

    return 0;
}

static int con(char *ipv6,int port){
    
   
    sock_udp_ep_t gw = { .family = AF_INET6, .port = CONFIG_EMCUTE_DEFAULT_PORT };
    

    // parse address 
    if (ipv6_addr_from_str((ipv6_addr_t *)&gw.addr.ipv6, ipv6) == NULL) {
        printf("error parsing IPv6 address\n");
        return 1;
    }
    
    gw.port = port;
    puts("test1");
    if (emcute_con(&gw, true, NULL, NULL, 0, 0) != EMCUTE_OK) {
        printf("error: unable to connect to [%s]:%i\n",ipv6, (int)gw.port);
        return 1;
    }
    puts("test2");
    printf("Successfully connected to gateway at [%s]:%i\n",
           ipv6, (int)gw.port);

    return 0;

}

static int cmd_discon(int argc, char **argv)
{
    (void)argc;
    (void)argv;

    int res = emcute_discon();
    if (res == EMCUTE_NOGW) {
        puts("error: not connected to any broker");
        return 1;
    }
    else if (res != EMCUTE_OK) {
        puts("error: unable to disconnect");
        return 1;
    }
    puts("Disconnect successful");
    return 0;
}

static int cmd_pub(int argc, char **argv)
{
    emcute_topic_t t;
    unsigned flags = EMCUTE_QOS_0;

    if (argc < 3) {
        printf("usage: %s <topic name> <data> [QoS level]\n", argv[0]);
        return 1;
    }

    /* parse QoS level */
    if (argc >= 4) {
        flags |= get_qos(argv[3]);
    }

    printf("pub with topic: %s and name %s and flags 0x%02x\n", argv[1], argv[2], (int)flags);

    /* step 1: get topic id */
    t.name = argv[1];
    printf("%s\n",t.name);
    if (emcute_reg(&t) != EMCUTE_OK) {
        puts("error: unable to obtain topic ID");
        return 1;
    }

    /* step 2: publish data */
    if (emcute_pub(&t, argv[2], strlen(argv[2]), flags) != EMCUTE_OK) {
        printf("error: unable to publish data to topic '%s [%i]'\n",
                t.name, (int)t.id);
        return 1;
    }

    printf("Published %i bytes to topic '%s [%i]'\n",
            (int)strlen(argv[2]), t.name, t.id);

    return 0;
}

char topic[sizeof(EMCUTE_ID)+14];
/*example msg:
    {
        "humidity":10.0,
        "device":"device0"
    }       
*/
static int pub_humidity(float humidity){
    emcute_topic_t t;
    unsigned flags = EMCUTE_QOS_0;
    //make the topic
    //sas/device0/readings
    snprintf(topic,sizeof(topic),"sas/%s/readings",EMCUTE_ID);
    t.name = topic;
    t.id = subscriptions[2].topic.id;
    // printf("%s\n",t.name);
    // int reg_res = emcute_reg(&t);
    // if (reg_res != EMCUTE_OK) {
    //     puts("error: unable to obtain topic ID");
    //     switch (reg_res)
    //     {
    //     case EMCUTE_NOGW:
    //         /* code */
    //         puts("No gateway connection");
    //         break;
    //     case EMCUTE_OVERFLOW:
    //         /* code */
    //         puts("Overflow");
    //         break;
    //     case EMCUTE_TIMEOUT:
    //         /* code */
    //         puts("Timeout");
    //         break;
    //     default:
    //         break;
    //     }
    //     return 1;
    // }

    //make message
    char message[80];
    snprintf(message,sizeof(message),"{\"humidity\":%f,\"device\":\"%s\"}",humidity,EMCUTE_ID);

    //publish data
    if (emcute_pub(&t, message, strlen(message), flags) != EMCUTE_OK) {
        printf("error: unable to publish data to topic '%s [%i]'\n",
                t.name, (int)t.id);
        return 1;
    }

    printf("Published %i bytes to topic '%s [%i]'\n",
            (int)strlen(message), t.name, t.id);

    return 0;
}


static void on_water(const emcute_topic_t *topic, void *data, size_t len){
    pumpWater(GPIO_LINE,5);
}

static void on_read(const emcute_topic_t *topic, void *data, size_t len){
    double sample = sample_moisture(ADC_IN_USE,ADC_RES);
    pub_humidity(sample);
}

static int sub(char *topic,int flags, int func){
    unsigned i = 0;
    for (; (i < NUMOFSUBS) && (subscriptions[i].topic.id != 0); i++) {}
    if (i == NUMOFSUBS) {
        puts("error: no memory to store new subscriptions");
        return 1;
    }

    subscriptions[i].cb = func==0 ? on_pub:(func == 1?on_read:on_water);
    strcpy(topics[i], topic);
    subscriptions[i].topic.name = topics[i];
    if (emcute_sub(&subscriptions[i], flags) != EMCUTE_OK) {
        printf("error: unable to subscribe to %s\n", topic);
        return 1;
    }

    printf("Now subscribed to %s\n", topic);
    return 0;
}
static int cmd_sub(int argc, char **argv)
{
    unsigned flags = EMCUTE_QOS_0;

    if (argc < 2) {
        printf("usage: %s <topic name> [QoS level]\n", argv[0]);
        return 1;
    }

    if (strlen(argv[1]) > TOPIC_MAXLEN) {
        puts("error: topic name exceeds maximum possible size");
        return 1;
    }
    if (argc >= 3) {
        flags |= get_qos(argv[2]);
    }

    sub(argv[1],flags,0);
    /* find empty subscription slot */
    // unsigned i = 0;
    // for (; (i < NUMOFSUBS) && (subscriptions[i].topic.id != 0); i++) {}
    // if (i == NUMOFSUBS) {
    //     puts("error: no memory to store new subscriptions");
    //     return 1;
    // }

    // subscriptions[i].cb = on_pub;
    // strcpy(topics[i], argv[1]);
    // subscriptions[i].topic.name = topics[i];
    // if (emcute_sub(&subscriptions[i], flags) != EMCUTE_OK) {
    //     printf("error: unable to subscribe to %s\n", argv[1]);
    //     return 1;
    // }

    // printf("Now subscribed to %s\n", argv[1]);
    return 0;
}

static int cmd_unsub(int argc, char **argv)
{
    if (argc < 2) {
        printf("usage %s <topic name>\n", argv[0]);
        return 1;
    }

    /* find subscriptions entry */
    for (unsigned i = 0; i < NUMOFSUBS; i++) {
        if (subscriptions[i].topic.name &&
            (strcmp(subscriptions[i].topic.name, argv[1]) == 0)) {
            if (emcute_unsub(&subscriptions[i]) == EMCUTE_OK) {
                memset(&subscriptions[i], 0, sizeof(emcute_sub_t));
                printf("Unsubscribed from '%s'\n", argv[1]);
            }
            else {
                printf("Unsubscription form '%s' failed\n", argv[1]);
            }
            return 0;
        }
    }

    printf("error: no subscription for topic '%s' found\n", argv[1]);
    return 1;
}

static int cmd_will(int argc, char **argv)
{
    if (argc < 3) {
        printf("usage %s <will topic name> <will message content>\n", argv[0]);
        return 1;
    }

    if (emcute_willupd_topic(argv[1], 0) != EMCUTE_OK) {
        puts("error: unable to update the last will topic");
        return 1;
    }
    if (emcute_willupd_msg(argv[2], strlen(argv[2])) != EMCUTE_OK) {
        puts("error: unable to update the last will message");
        return 1;
    }

    puts("Successfully updated last will topic and message");
    return 0;
}

static int cmd_sample(int argc, char **argv){
    sample_moisture(ADC_IN_USE,ADC_RES);
    return 0;
}

static int cmd_water(int argc, char **argv){
    uint32_t time;
    if(argc>1)time=atoi(argv[1]);
    else time = 5;

    pumpWater(GPIO_LINE,time);
    return 0;
}

static const shell_command_t shell_commands[] = {
    { "con", "connect to MQTT broker", cmd_con },
    { "discon", "disconnect from the current broker", cmd_discon },
    { "pub", "publish something", cmd_pub },
    { "sub", "subscribe topic", cmd_sub },
    { "unsub", "unsubscribe from topic", cmd_unsub },
    { "will", "register a last will", cmd_will },
    { "sample", "sample the humidity from the sersor", cmd_sample},
    { "water", "pump water", cmd_water},
    { NULL, NULL, NULL }
};



static void *emcute_thread(void *arg)
{
    (void)arg;
    emcute_run(CONFIG_EMCUTE_DEFAULT_PORT, EMCUTE_ID);
    return NULL;    /* should never be reached */
}

int main(void)
{   

    /*test analog sensor data collection section*/
    printf("\n Smart Home Irrigation System \n Measure the moisture level of the soil\n");
    if(adc_init(ADC_IN_USE) < 0){
        printf("Initialization of ADC_LINE(%u) failed\n", ADC_IN_USE);
        return 1;
    }else{
        printf("Successfully initialized ADC_LINE(%u)\n", ADC_IN_USE);
    }

    if(gpio_init(GPIO_LINE,GPIO_OD) == 0){
        printf("GPIO line %u initialization succesful\n",GPIO_LINE);
    }else{
        printf("Error initializing %u GPIO line\n",GPIO_LINE);
        return 1;
    }
    gpio_set(GPIO_LINE);


    /*Update this section to call and publish to the topic after the wifi is connected*/
    // section to periodically check the soil moisture
    xtimer_ticks32_t last = xtimer_now();
    int sample = 0;
    int curMoistPercntage = 0;

    // Wait for WiFi connection
    while (esp_wifi_connect() != ESP_OK) {
        xtimer_sleep(1); // Sleep for 1 second before retrying
    }

    // Initialize the network stack
    gnrc_netif_t *netif =gnrc_netif_iter(NULL);

    ipv6_addr_t ipv6_addr;
    ipv6_addr_from_str(&ipv6_addr,"fec0:affe::99");
    puts("test");
    uint8_t prefix_len = 64;
    if(gnrc_netif_ipv6_addr_add(netif,&ipv6_addr,prefix_len,GNRC_NETIF_IPV6_ADDRS_FLAGS_STATE_VALID)>0){
        puts("inet interface set");
    }



    //puts("MQTT-SN example application\n");
    puts("Type 'help' to get started. Have a look at the README.md for more"
         "information.\n");

    /* the main thread needs a msg queue to be able to run `ping`*/
    msg_init_queue(queue, ARRAY_SIZE(queue));

    /* initialize our subscription buffers */
    memset(subscriptions, 0, (NUMOFSUBS * sizeof(emcute_sub_t)));

    /* start the emcute thread */
    thread_create(stack, sizeof(stack), EMCUTE_PRIO, 0,
                  emcute_thread, NULL, "emcute");

    xtimer_sleep(1);
    //connect to broker
    con("fec0:affe::1",10000);

    


    /*Sub to read and water topic*/
    const int topSize = 3+sizeof(EMCUTE_ID)+1+4+2;
    char readTopic[topSize];
    snprintf(readTopic,sizeof(readTopic),"sas/%s/read",EMCUTE_ID);
    if(sub(readTopic,EMCUTE_QOS_0,1)>0) return 1;

    const int topSize2 = 3+sizeof(EMCUTE_ID)+1+5+2;
    char waterTopic[topSize2];
    snprintf(waterTopic,sizeof(waterTopic),"sas/%s/water",EMCUTE_ID);
    if(sub(waterTopic,EMCUTE_QOS_0,2)>0) return 1;

    const int topSize3 = 3+sizeof(EMCUTE_ID)+1+8+2;
    char readingsTopic[topSize3];
    snprintf(readingsTopic,sizeof(readingsTopic),"sas/%s/readings",EMCUTE_ID);
    if(sub(readingsTopic,EMCUTE_QOS_0,0)>0) return 1;

    /* start shell */
    char line_buf[SHELL_DEFAULT_BUFSIZE];
    shell_run(shell_commands, line_buf, SHELL_DEFAULT_BUFSIZE);

    while(1){
        float moisture = sample_moisture(ADC_IN_USE,ADC_RES);
        pub_humidity(moisture);
        if(moisture < 40){
            pumpWater(GPIO_LINE, 10);
            xtimer_periodic_wakeup(&last, DELAY30);
            continue;
        }
        xtimer_periodic_wakeup(&last, DELAY);
    }
    /* should be never reached */
    return 0;
}