APPLICATION=device

BOARD?=esp32-heltec-lora32-v2


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

CFLAGS+='-DWIFI_SSID="Vodafone-A63435350"'
CFLAGS+='-DWIFI_PASS="addu5bmz9zts5bba"'

DEVELHELP ?= 1

QUIET?=1

include $(RIOTBASE)/Makefile.include