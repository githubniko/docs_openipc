---
title: GroundStation на NVR
description: Как заставить плату NVR работать с OpenIPC
---

## Переход с оригинальной прошивки платы NVR HI3536DV100 на прошивку OpenIPC FPV

- Установите [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) и сервер [TFTP](https://pjo2.github.io/tftpd64/).
- Скачайте актуальный [образ](https://openipc.org/cameras/vendors/hisilicon/socs/hi3536dv100/download_full_image?flash_size=16&flash_type=nor&fw_release=fpv) для NVR с сайта OpenIPC.
- Загрузите этот образ на свой TFTP-сервер.
- Отключите питание NVR, подключите USB-адаптер к UART NVR и укажите COM-порт на ПК.
- Перейдите в U-Boot быстрым нажатием `Ctrl+C` при включении питания.
- Выполните набор команд, каждую строку отдельно:

```
## Изменение IP-адреса платы NVR и IP-адреса вашего TFTP-сервера
setenv ipaddr 192.168.1.10; setenv serverip 192.168.1.254
mw.b 0x82000000 0xff 0x1000000
tftp 0x82000000 openipc-hi3536dv100-fpv-16mb.bin
sf probe 0; sf lock 0; sf erase 0x0 0x1000000; sf write 0x82000000 0x0 0x1000000
reset
```

## Результат

![](/images/fpv-nvr-hi3536dv100-openipc-ready.webp)

## Где купить устройство

- [https://www.aliexpress.com/item/1005004023376532.html](https://www.aliexpress.com/item/1005004023376532.html)
- [https://www.aliexpress.com/item/1005002358182146.html](https://www.aliexpress.com/item/1005002358182146.html)
