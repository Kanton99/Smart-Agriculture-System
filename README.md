# Smart-Agriculture-System

## People 

- [Anton Volkov](https://www.linkedin.com/in/anton-volkov-318746129/)
- [Rishiraj Salam](https://www.linkedin.com/in/rishiraj-salam-78ba32151/)

## Project Description
This project is for a device that periodically samples your houseplant and waters it when necessary.

It also includes code for a webapp to see graphs of the latests readings and manual controls if needed.

## Hackster blog
https://www.hackster.io/salam1974210/iot-smart-agriculture-system-with-esp32-03b6cb

[Presentation video](https://youtu.be/3S1RmD-O0Z0)
[Demonstration video](https://youtu.be/ZvdEffpUdE0)
## Documents
### First Delivery

- [Concept](./First%20Delivery/Concept.md)
- [Design](./First%20Delivery/Design.md)
- [Evaluation](./First%20Delivery/Evaluation.md)

### Second Delivery
- [Delivery](./Second%20delivery/2nd%20Delivery.md)
- [Concept](./Second%20delivery/Concept.md)
- [Design](./Second%20delivery/Design.md)
- [Evaluation](./Second%20delivery/Evaluation.md)

### Third Delivery
- [Concept](./Third%20Delivery/Concept.md)
- [Design](./Third%20Delivery/Design.md)
- [Evaluation](./Third%20Delivery/Evaluation.md)

## How to use
### Requirements
- Esp32 Lora Board
- Capacitive Soil Moisture Sensor
- Electric water pump
- Relay
- Docker
- mosquitto
### Install the code
```git clone --recurse-submodules https://github.com/Kanton99/Smart-Agriculture-System.git ```

This also install the RIOT submodule to compile the device code and the paho-mqttsn submodule for the gateway

### Setup
Go to DeviceCode

```cd Smart-Agriculture-System/DeviceCode```

Set the WIFI SSID and PASSWORD values in the makefile to your wifi network name and password, or the lan where the device, broker and gateway will be connected, as long as it supports ipv6.

Set at the beginning ```main.c``` the GPIO line where the pump controls will be handled and the device id.

### Compile and flash the board

```make BOARD=<your board> BUILD_IN_DOCKER=1 all flash```

one could add ```term``` to the above line if you want to use the device's shell.

This will compile and upload the code to the device, which will immediately start working by conencting to the wifi and try to connect to the gateway.

### Gateway
Gateway instructions are in its [directory](./gateway/README.md)
