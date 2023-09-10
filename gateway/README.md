# MQTT-SN Gateway and MQTT Broker
## linux setup
Get your internet interface 

> ifconfig

Add the fec0:affe::1 interface to your linux distribution

> sudo ip a a fec0:affe::1 dev < interface >  

## How to use
### mosquitto
If you don't already have it, install mosquitto

```sudo apt install msquitto```

### gateway

make sure the paho.mqtt-sn.embedded-c is installed

in a new window go to ```paho.mqtt-sn.embedded.c/MQTTSNGateway```

```cd paho.mqtt-sn.embedded.c/MQTTSNGateway```

execute the build script in here specifing to make for upd6

```./build.sh udp6```

### Start evrything

When all is done, execute the ```start-gateway.sh``` script

### Connect the device
now in the RIOT OS terminal you can connect the device to ```fec0:affe::1``` on port ```10000```, or whichever port you've chosen