#ifndef HUMIDITY_SENS
#define HUMIDITY_SENS

#include "periph/adc.h"
#include <stdio.h>

double calculateMoisture(double rawval);

double sample_moisture(adc_t line, adc_res_t res);

#endif