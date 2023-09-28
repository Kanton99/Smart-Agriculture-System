# Evaluation
## Moisture readings
The moisture readings will be evaluated against samples with known levels of moistures to measure the accuracy of the sensor.
With this project we are considering different soil moisture levels to find out which is the most effective moisture level for the plant.

### Key Concept for Soil Moisture Monitoring
Soil holds water in a soil mixture by action of surface tension attraction water molecules to soil particles
* **Soil type** is a primary factor that controls the amount and   
  availability   of water  stored in soil.

* **Tension** is a measure of the amount of water held in a soil expressed as the amount of suction required (for plants) to remove water from the soil.

* **Volumetric Water Content (VWC)** is a measure of the amount of water held in a soil expressed as a percentage of the total mixture.

* **Field Capacity(FC)** is a soil water content that results in a state of balance between gravity force and surface tension force. At Field Capacity soil has a balance of air and water that results in good growing conditions.

#### Normal Soil Moisture Reading
**Volumetric Water Content (“VWC”)** is a numerical measure of soil moisture. . It is expressed as a percentage or ratio of the amount of water held by the soil. 
For example, one cubic meter of soil with 30% VWC contains 0.3 cubic meter, or 300 liters, of water. You should expect VWC readings between 5% and 35% depending on your soil type.

#### Ideal Soil Moisture level
Ideal soil moisture level is between field capacity and wilting point.

* **Field Capacity:** As much water as the soil can hold, 2 or 3 days after a heavy rainfall, when the soil is fully saturated. At this point, there is very little downward movement of soil water due to gravity and very little suction due to capillary action.

* **Permanent Wilting Point:** The amount of water remaining in the soil when the plant wilts in a humid atmosphere. The water remaining in the soil is held tightly by soil particles, and plant roots cannot easily extract water.

* **Saturation:** refers to a soil’s water content when practically all pore spaces are filled with water. When the soil is fully saturated, the water will run off quickly via available channels until levels reach field capacity.

* **Available Soil Water:** The amount of water in the soil between field capacity and the permanent wilting point. Generally, overhead irrigation should start before soil reaches 50% of available soil water. Drip irrigation should start before soil reaches 80% of available soil water



The field capacity and permanent wilting points are shown in the table below for various soil textures. 

| Soil Type | Permanant Wilting Point | Field Capacity |
| --------- | ----------------------- | -------------- |
|Sand	|5% VWC	|10% VWC |
|Loamy Sand |	5% VWC |	12% VWC |
|Sandy Loam	| 8% VWC	| 18% VWC |
|Sandy Clay Loam | 17% VWC |	27% VWC |
|Loam |	14% VWC	| 28% VWC |
|Sandy Clay |	25% VWC |	36% VWC |
|Silt Loam |	11% VWC |	31% VWC |
|Silt | 6% VWC |	30% VWC |
|Clay Loam |22% VWC	| 36% VWC |
|Silty Clay Loam | 22% VWC	| 38% VWC |
|Silty Clay	| 27% VWC |	41% VWC |
|Silt |	30% VWC	| 42% VWC |


### Sensor Calibration
For the calibration of the sensor we used 12bit ADC resolution and calibrated the sensor in two differrent conditions complete dry condition and maximum moisture by dipping the sensor in a glass of water.

| Raw ADC value | Percentage |
| --------- | ---------- |
| 1020      | 0% (Minimunm) |
| 2130      | 100% (Maximum) |

### Moisture Level Classification
For the puspose of evaluation we are considering four different acceptable levels: Dry, Fair, Good and, Excessive.

The acceptable range is genaralized range adapted to each potting soil type to match the range between **Field Capacity** and **Wilting Point**.


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

For our experiment the type of soil we used is **Sandy Loam** soil. We have set the flow rate of the water pump to match the ideal soil moisture.


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


