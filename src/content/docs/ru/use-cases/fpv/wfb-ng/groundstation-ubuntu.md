---
title: GroundStation на Ubuntu 22.04
description: Руководство с подробным пошаговым описанием настройки наземной станции на Ubuntu
---

Видео-версия:

- [OpenIPC - Prepare GroundStation: Ubuntu + QGroundControl](https://www.youtube.com/watch?v=JMtRAsOm0Dc)

## Подготовка

```
sudo apt update
```

```
sudo apt install dkms git python3-all-dev net-tools virtualenv fakeroot debhelper python3-twisted
sudo apt install dkms git python3-all-dev net-tools virtualenv fakeroot debhelper python3-twisted  libpcap-dev python3-pyroute2 python3-future python3-configparser python3-all libsodium-dev
```

## Libsodium

```
git clone https://github.com/jedisct1/libsodium --branch stable
cd libsodium
./configure
make && make check
sudo make install
```

## Драйвер Wi-Fi карты

```
git clone -b v5.2.20 https://github.com/svpcom/rtl8812au.git
cd rtl8812au/
sudo ./dkms-install.sh
```

## WFB-NG

```
git clone -b stable https://github.com/svpcom/wfb-ng.git
cd wfb-ng
sudo ./scripts/install_gs.sh wlan0
```

## Настройка канала

```
vi /etc/wifibroadcast.cfg
```

## Запуск WFB CLI

```
wfb-cli gs
```

######GS IS READY FOR USE######

## Запуск, остановка и перезапуск сервиса

```
systemctl status wifibroadcast@gs
systemctl stop wifibroadcast@gs
systemctl start wifibroadcast@gs
```

## Руководство QGroundControl

- https://docs.qgroundcontrol.com/master/en/getting_started/download_and_install.html

## Получение последних логов сервиса

```
journalctl -xu wifibroadcast@gs -n 100
```

## Полезные команды

```
nmcli
ifconfig
iwconfig
```
