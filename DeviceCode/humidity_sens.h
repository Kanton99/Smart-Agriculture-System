#ifndef HUMIDITY_SENS
#define HUMIDITY_SENS

#include "periph/adc.h"

double calculateMoisture(double rawval);

float sample_moisture(adc_t line, adc_res_t res);

#endif