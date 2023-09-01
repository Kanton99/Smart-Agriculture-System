# MQTT-SN Gateway and MQTT Broker
## linux setup
Get your internet interface 

> ifconfig

Add the fec0:affe::1 interface to your linux distribution

> sudo ip a a fec0:affe::1 dev < interface >  

## How to use
### mosquitto
If you don't already have it, install mosquitto
> sudo apt install msquitto

Start mosquitto with the custom conf in here

> mosquitto -c mosquitto_bridge.conf

### gateway

make sure the paho.mqtt-sn.embedded-c is installed

in a new window go to paho.mqtt-sn.embedded.c/MQTTSNGateway

execute the build script in here specifing to make for upd6

> ./build.sh udp6

when it's done start the gateway with the custom conf file

> bin/MQTTSNGateway -f ../../Gateway/gateway.conf

You can change what port is the gateway listening to in the custom conf file.

### connect the device
now in the RIOT OS terminal you can connect the device to fec0:affe::1 on port 10000, or whatever port you've chosen