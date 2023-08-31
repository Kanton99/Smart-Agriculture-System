APPLICATION=mycode

BOARD?=native

BUILD_IN_DOCKER?=True

RIOTBASE?=$(CURDIR)/RIOT


USEMODULE += shell
USEMODULE += shell_cmds_default
USEMODULE += ps

USEMODULE += netdev_default
USEMODULE += esp_wifi
USEMODULE += gnrc_ipv6_default
CFLAGS+='-DWIFI_SSID=\"WIFI_SSID\"'
CFLAGS+='-DWIFI_PASS=\"WIFI_PASS\"'

USEMODULE += xtimer


DEVELHELP ?= 1

QUIET?=1

include $(RIOTBASE)/Makefile.include