
## Technology

### Main Core Parts
* Soil Moisture Monitoring System
* Dashboard

---
#### Soil Moisture Monitoring System
Soil MOisture Monitoring System is the main component of the project. The main purpose of this system to collect the water status in the soil using soil moisture sensors to automate the irrigation process. The collected data are then sent to the cloud server to further process and analyze the data. The SMM system consists of Soil Moisture Sensor and a Water Pump.

### Dashboard
It is the highest level client side component of the project. The Dashboard is a web application which would be hosted on the remote server on AWS. The data collected from the Soil Moisture Monitoring System after processing will be represented visually on the dashboard. The dashboard will also act as a key feedback component.

---

### Sensors
All the sensors are chosen accordingly to the suitability of the project.

* Soil Moisture Sensor
* Photoresister

### Actuator

* Water Pump

### Communication
* WiFi LoRa 32 (V3)

---

### Message Broker
##### MQTT Broker (AWS core IoT)
* Sensor data are transmitted through a message broker to the IoT    
  core through publish method for data processing.
* Lightweight and suitable to low bandwidth exchange of data.

#### Eclipse Mosquitto
Mosquitto is an open source MQTT brokerand thus will be the main part of our communication system between the development board and the cloud service.

---
### Development Board
ESP-32 Development Board.

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