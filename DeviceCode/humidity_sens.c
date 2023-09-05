#include "humidity_sens.h"

double calculateMoisture(double rawval){
    double value = rawval;
    double min_value = 1020; // Minimum value (0%)
    double max_value = 2130; // Maximum value (100%)

    // calculate the percentage using linear interpolation
    double percentage = 100.0 * ((max_value - value) / (max_value - min_value));

    // ensure the percentage is within the valid range
    if(percentage < 0.0){
        percentage = 0.0;
    } else if(percentage > 100.0){
        percentage = 100.0;
    }

    printf("Percentage: %.2f%%\n",percentage);
    return percentage;
}

float sample_moisture(adc_t line, adc_res_t res){
    int32_t sample = adc_sample(line, res);
    double moisture;
    if(sample < 0){
        printf("ADC_LINE(%u): selected resolution not applicable\n", line);
        return -1;
    }else{
        printf("ADC_LINE(%u): raw value: %i\n", line, sample);
        return calculateMoisture(sample);
    }
}
