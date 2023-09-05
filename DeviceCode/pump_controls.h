#ifndef PUMP_CONTROLS
#define PUMP_CONTROLS

#include <stdio.h>
#include "board.h"
#include "periph/gpio.h"
#include "xtimer.h"

int pumpWater(gpio_t line, uint32_t seconds);
#endif