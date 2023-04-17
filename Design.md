## Design

### Main Core Parts
* Soil Moisture Monitoring System
* Dashboard

---
#### Soil Moisture Monitoring System
Soil Moisture Monitoring System is the main component of the project. The main purpose of this system to collect the water status in the soil using soil moisture sensors to automate the irrigation process. The collected data are then sent to the cloud server to further process and analyze the data. The SMM system consists of Soil Moisture Sensor and a Water Pump.

### Dashboard
It is the highest level client side component of the project. The Dashboard is a web application which would be hosted on the remote server on AWS. The data collected from the Soil Moisture Monitoring System after processing will be represented visually on the dashboard. The dashboard will also act as a key feedback component.

---

### IoT Architecture

![iot_architecture](https://user-images.githubusercontent.com/30042823/231896005-f5006c76-7fe4-40aa-a8d6-ab16bba0ec41.png)

---

### System Architecture

![sys-arch-iot](https://user-images.githubusercontent.com/30042823/231898808-f6aecab5-aa6d-4ed4-b4a0-31328b80cc28.png)

### Sensors
All the sensors are chosen accordingly to the suitability of the project.

##### Soil Moisture Sensor
Used to collect water data in soil.

![soil-moisture-sensor](https://user-images.githubusercontent.com/30042823/231896940-07fde6f0-5582-41dc-93aa-93088e99b800.jpeg)

##### Photoresister
Used to collect luminosity data from the environment.

![photoresistor-sensor](https://user-images.githubusercontent.com/30042823/231897002-fb9f8450-044d-4a78-a897-acf785589c61.jpeg)

### Actuator

##### Water Pump
Used to disperse water when the soil moisture level is low.

![water-pump](https://user-images.githubusercontent.com/30042823/231897604-308ea3ca-9725-42a5-abf7-04903ae04dce.jpg)

---
### Development Board
ESP-32 Development Board
Used as master node to house the sensors.

![esp-32](https://user-images.githubusercontent.com/30042823/231897736-633ff93a-e54d-4661-9e94-ae0838a460e3.jpg)

### Communication
##### WiFi LoRa 32 (V3)

![wifi-lora32](https://user-images.githubusercontent.com/30042823/231898159-398bd807-fc77-4b4f-87c3-9af2a1176db4.jpg)

---

### Message Broker
##### MQTT Broker (AWS core IoT)
* Sensor data are transmitted through a message broker to the IoT    
  core through publish method for data processing.
* Lightweight and suitable to low bandwidth exchange of data.

#### Eclipse Mosquitto
Mosquitto is an open source MQTT brokerand thus will be the main part of our communication system between the development board and the cloud service.

---
### Cloud
#### Amazon Web Services
AWS is extremely powerful cloud system, it offers different functionalities. One of these is a communication system with MQTT, supporting both level 0 and level 1 QoS(Quality of Service) 

---
### Distribution
#### HTTP Endpoint
A communication channel that will be able to request data from the Cloud through the elaboration of the GET requests done by the user.

#### Web Dashboard
Web dashboard is used as platform to display the dataset in visual form. With Web dashboard the end user can also send command back to actuators whether to take action or not.