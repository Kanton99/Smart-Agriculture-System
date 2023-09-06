mosquitto -c mosquitto_bridge.conf & > bridge.log
./paho.mqtt-sn.embedded-c/MQTTSNGateway/bin/MQTT-SNGateway -c gateway.conf & > gateway.log
