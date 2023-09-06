APPLICATION=device

BOARD?=native


RIOTBASE?=$(CURDIR)/RIOT

USEMODULE += netdev_default
USEMODULE += esp_wifi
USEMODULE += auto_init_gnrc_netif

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


CFLAGS+='-DWIFI_SSID="Vodafone-A63435350"'
CFLAGS+='-DWIFI_PASS="addu5bmz9zts5bba"'
#CONFIG_GNRC_IPV6_NIB_SLAAC=1

#CFLAGS+='-DWIFI_SSID="androidkv"'
#CFLAGS+='-DWIFI_PASS="bionicle"'

DEVELHELP ?= 1

QUIET?=1

include $(RIOTBASE)/Makefile.include
