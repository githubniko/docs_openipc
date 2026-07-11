---
title: Связанные FPV-ресурсы
description: Актуальные ссылки OpenIPC FPV на документацию, прошивки, наземные станции и вспомогательные приложения.
---

Материалы OpenIPC FPV распределены по нескольким репозиториям и инструментам. Используйте эту страницу как отправную точку для WFB-NG и AP FPV, загрузки прошивок, образов наземных станций и вспомогательных приложений.

## Документация

- [Документация OpenIPC](https://docs.openipc.org/) - сайт документации, который вы читаете сейчас.
- [OpenIPC Wiki](https://github.com/OpenIPC/wiki) - технические заметки, исторические инструкции и актуальные публикации сообщества. Некоторые страницы могут описывать старое поведение прошивок, поэтому сверяйте их с текущей документацией и релизами.
- [Быстрый старт FPV через WFB-NG](/ru/use-cases/fpv-over-wfb-ng/quick-start/) - входная точка для FPV-систем на WFB-NG.
- [Быстрый старт AP FPV через Wi-Fi](/ru/use-cases/ap-fpv-over-wi-fi/quick-start/) - входная точка для Access Point FPV, где используется обычный Wi-Fi вместо WFB-NG.

## Прошивки и система сборки

- [OpenIPC firmware](https://github.com/OpenIPC/firmware) - исходный код прошивки на базе Buildroot для поддерживаемых IP-камер и FPV-передающих модулей.
- [OpenIPC Builder](https://github.com/openipc/builder) - скрипты сборки прошивок для известных устройств, включая IP-камеры и FPV-модули OpenIPC, например Mario AIO. Используйте его, когда нужен образ прошивки с нестандартными настройками.
- [Последние релизы прошивок](https://github.com/OpenIPC/firmware/releases/tag/latest) - готовые образы для поддерживаемых устройств.
- [Последний AP FPV образ для SSC338Q NOR](https://github.com/OpenIPC/builder/releases/download/latest/openipc.ssc338q-nor-apfpv.tgz) - прошивка AP FPV, которая использует обычный Wi-Fi вместо WFB-NG.

## Наземные станции

[Radxa Zero 3W/3E](/ru/hardware/sbcs/radxa-zero-3w-3e/) - компактная платформа для наземной станции OpenIPC FPV. Также могут подойти похожие одноплатные компьютеры на Rockchip, включая Orange Pi 3B, Orange Pi 5 и Orange Pi 5 Plus. Минимально планируйте 2 ГБ RAM, рекомендуется 4 ГБ, а также eMMC или SD-накопитель от 8 ГБ, рекомендуется от 16 ГБ.

- [JohnDGodwin/zero3w-gs](https://github.com/JohnDGodwin/zero3w-gs) - исходные файлы и сценарии установки для запуска Radxa Zero 3W как наземной станции OpenIPC.
- [Релизы OpenIPC SBC ground stations](https://github.com/OpenIPC/sbc-groundstations/releases/tag/latest) - актуальные образы наземной станции OpenIPC.
- [zhouruixi/SBC-GS](https://github.com/zhouruixi/SBC-GS) - альтернативные скрипты сборки и исходные файлы для образов наземной станции Radxa Zero 3W.
- [Релизы zhouruixi/SBC-GS](https://github.com/zhouruixi/SBC-GS/releases/) - ISO-образы альтернативного проекта SBC-GS.

## Конфигураторы и пресеты

- [OpenIPC Companion](https://github.com/OpenIPC/companion) - кроссплатформенный конфигуратор OpenIPC FPV для настройки камеры и наземной станции.

  ![Экран настроек WFB в OpenIPC Companion](/images/fpv-related-openipc-companion-wfb.webp)
- [OpenIPC Configurator](https://github.com/OpenIPC/configurator) - Windows-конфигуратор, который упрощает настройку камеры и наземной части.

  ![OpenIPC Configurator в Windows](/images/fpv-related-openipc-configurator.webp)
- [OpenIPC FPV Presets](https://github.com/OpenIPC/fpv-presets) - готовые пресеты для типовых FPV-сценариев, включая гонки, фристайл и дальние полеты.

  ![Экран пресетов в OpenIPC Companion](/images/fpv-related-fpv-presets.webp)

## Просмотр и видеоинструменты

- [Aviateur](https://github.com/OpenIPC/aviateur) - приложение наземной станции OpenIPC FPV для Windows и Linux, основанное на [fpv4win](https://github.com/OpenIPC/fpv4win). Оно позволяет использовать ПК или ноутбук для отображения видеопотока.

  ![Интерфейс наземной станции Aviateur OpenIPC FPV](/images/fpv-related-aviateur-ground-station.webp)
- [PixelPilot RK](https://github.com/OpenIPC/PixelPilot_rk) - декодер с низкой задержкой для наземных станций на базе Rockchip. Использует GStreamer и библиотеку Rockchip [MPP](https://github.com/rockchip-linux/mpp), поддерживает OSD-данные через MAVLink и показывает статистику канала и декодирования. Проект основан на разработке Gee He [FPVue_rk](https://github.com/gehee/FPVue_rk).

  ![Экран PixelPilot RK с OSD и статистикой канала](/images/fpv-related-pixelpilot-rk.webp)
- [PixelPilot for Android](https://github.com/OpenIPC/PixelPilot) - Android-приложение для декодирования live-потока H.264/H.265 из WFB-NG. Поддерживает устройства arm64-v8a и armeabi-v7a, включая Meta Quest 2/3 в режиме без VR.

  ![Видео и OSD в PixelPilot для Android](/images/fpv-related-pixelpilot-android.webp)

## Компоненты связи и телеметрии

- [MSP OSD](https://github.com/OpenIPC/msposd) - накладывает OSD-данные Betaflight, INAV или ArduPilot на видеопоток на стороне камеры.

  ![Наложение MSP OSD на FPV-видеопоток](/images/fpv-related-msposd-osd.webp)
- [MAVFWD](https://github.com/OpenIPC/mavfwd) - передает MAVLink-телеметрию между WiFi broadcast-устройствами и UART для односторонней или двусторонней телеметрии между БПЛА и наземной станцией.
- [Adaptive link](https://github.com/OpenIPC/adaptive-link) - адаптирует битрейт видео и скорость Wi-Fi к качеству канала и может повторно отправлять потерянные видеокадры.
- [Divinus](https://github.com/OpenIPC/divinus) - открытый кроссплатформенный стример и альтернатива закрытому стримеру Majestic.
