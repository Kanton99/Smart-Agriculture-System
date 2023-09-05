#include "pump_controls.h"

int pumpWater(gpio_t line, uint32_t seconds){
    gpio_set(line);

    xtimer_sleep(seconds);

    gpio_clear(line);

    return 0;
}