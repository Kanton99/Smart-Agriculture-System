# Evaluation
## Moisture readings
The moisture readings will be eavluated against samples with known leves of moistures to measure the accuracy of the sensor.

## Actuator
The water pump will be tested on the flow rate it can achieve, so that the device can control how much water is giving to the plants with the best accuracy possible. 
|Expected flow|Actual Flow|
|------------|---|
|100L/h|86L/h|
## Network
The devince will be used in potted plants, so it can connect to the local WiFi

## Power consuption
The system will be plugged in the power outlet of the users house, so power consuption will not be a problem. 
### Expected power Consumption of individual modules
|Component      |idle consumption|max consuption|
|---------------|----------------|------------- |
|LoRa Wifi      |<5mA           |51mA           |
|Moisture Sensor|<5mA            |7.57mA          |
|Water pump     |<5mA            |63.2mA         |

Assuming that in average a plant needs water once a week and to reach the desired moisture it needs 3 watering cycles, the duty cycle of the device is of 0.0005%. Meaning that if given a 1000mA/h battery it would last about 100 hours.
On the water consumption side of things, the pumps uses around 0.023 L/s when used, so with the previous assumption a 1L water container would last about 100 days.


