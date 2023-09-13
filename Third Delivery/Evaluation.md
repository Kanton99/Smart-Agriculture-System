# Evaluation
## Moisture readings
The moisture readings will be evaluated against samples with known levels of moistures to measure the accuracy of the sensor.
With this project we are considering different soil moisture levels to find out which is the most effective moisture level for the plant.


### Sensor Calibration
For the calibration of the sensor we used 12bit ADC resolution and calibrated the sensor in two differrent conditions complete dry condition and maximum moisture by dipping the sensor in a glass of water.

| Raw ADC value | Percentage |
| --------- | ---------- |
| 1020      | 0% (Minimunm) |
| 2130      | 100% (Maximum) |

### Moisture Level Classification
For the puspose of evaluation we are considering four different acceptable levels: Dry, Fair, Good and, Excessive.


| Percentage |   Level    |
| ---------- | ---------- |
| 10%        | Dry        |
| 20%        | Fair       |
| 30%        | Fair       |
| 40%        | Good       |
| 50%        | Good       |
| 60%        | Good       |
| 70%        | Excessive  |
| 80%        | Excessive  |
| 90%        | Excessive  |
| 100%       | Excessive  |

The main purpose of this classification is to get an optimal moisture level for the plants to sustain without watering atleast for 2 days.

Soil moisture guide reference link [Guide](https://connectedcrops.ca/the-ultimate-guide-to-soil-moisture/)

## Actuator
The water pump will be tested on the flow rate it can achieve, so that the device can control how much water is giving to the plants with the best accuracy possible. 
|Expected flow|Actual Flow|
|------------|---|
|100L/h|86L/h|
## Network
The device will be used in potted plants, so it can connect to the local WiFi

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


<!-- # Useful Links (to delete before delivary)
[Soil Moistures](https://eos.com/blog/soil-moisture/#:~:text=Ultimately%2C%20the%20soil%20moisture%20effect,between%2020%25%20and%2060%25.) -->
