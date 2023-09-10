APPLICATION=device

BOARD?=native


RIOTBASE?=$(CURDIR)/RIOT

USEMODULE += esp_wifi
#USEMODULE += esp_wifi_sta
USEMODULE += auto_init_gnrc_netif
USEMODULE += gnrc_ipv6_router_default
#USEMODULE += gnrc_netif_default
USEMODULE += gnrc_ipv6_default


USEMODULE += emcute
USEMODULE += gnrc_icmpv6_echo

USEMODULE += shell
USEMODULE += shell_cmds_default
USEMODULE += ps

USEMODULE += xtimer
USEMODULE += analog_util
USEMODULE += timex

FEATURES_REQUIRED += periph_adc


CFLAGS+='-DWIFI_SSID="<WIFI SSID>"'
CFLAGS+='-DWIFI_PASS="<WIFI PASSWORD"'

DEVELHELP ?= 1

QUIET?=1

include $(RIOTBASE)/Makefile.include
