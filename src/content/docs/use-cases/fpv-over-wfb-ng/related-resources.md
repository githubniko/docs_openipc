---
title: Related FPV Resources
description: Current OpenIPC FPV documentation, firmware, ground station, and companion software links.
---

OpenIPC FPV work is spread across several repositories and tools. Use this page as a curated starting point for WFB-NG and AP FPV setups, firmware downloads, ground station images, and helper applications.

## Documentation

- [OpenIPC docs](https://docs.openipc.org/) - the documentation site you are reading now.
- [OpenIPC Wiki](https://github.com/OpenIPC/wiki) - technical notes, historical guides, and current community write-ups. Some pages can describe older firmware behavior, so compare them with the current docs and releases.
- [FPV over WFB-NG quick start](/use-cases/fpv-over-wfb-ng/quick-start/) - entry point for WFB-NG based FPV setups.
- [AP FPV over Wi-Fi quick start](/use-cases/ap-fpv-over-wi-fi/quick-start/) - entry point for Access Point FPV setups that use regular Wi-Fi instead of WFB-NG.

## Firmware and build system

- [OpenIPC firmware](https://github.com/OpenIPC/firmware) - Buildroot-based firmware source for supported IP cameras and FPV air units.
- [OpenIPC Builder](https://github.com/openipc/builder) - firmware build scripts for known devices, including IP cameras and OpenIPC FPV air units such as Mario AIO. Use it when you need a firmware image with custom settings.
- [Latest firmware releases](https://github.com/OpenIPC/firmware/releases/tag/latest) - ready-made firmware images for supported devices.
- [Latest AP FPV image for SSC338Q NOR](https://github.com/OpenIPC/builder/releases/download/latest/openipc.ssc338q-nor-apfpv.tgz) - AP FPV firmware image that uses regular Wi-Fi instead of WFB-NG.

## Ground stations

[Radxa Zero 3W/3E](/hardware/sbcs/radxa-zero-3w-3e/) is a compact ground station platform for OpenIPC FPV. Similar Rockchip SBCs can also work, including Orange Pi 3B, Orange Pi 5, and Orange Pi 5 Plus. Plan for at least 2 GB RAM, with 4 GB recommended, and at least 8 GB eMMC or SD storage, with 16 GB recommended.

- [JohnDGodwin/zero3w-gs](https://github.com/JohnDGodwin/zero3w-gs) - source files and installation scripts for running Radxa Zero 3W as an OpenIPC ground station.
- [OpenIPC SBC ground station releases](https://github.com/OpenIPC/sbc-groundstations/releases/tag/latest) - current OpenIPC ground station release images.
- [zhouruixi/SBC-GS](https://github.com/zhouruixi/SBC-GS) - alternative build scripts and source files for Radxa Zero 3W ground station images.
- [zhouruixi/SBC-GS releases](https://github.com/zhouruixi/SBC-GS/releases/) - ISO images from the alternative SBC-GS project.

## Configurators and presets

- [OpenIPC Companion](https://github.com/OpenIPC/companion) - cross-platform OpenIPC FPV configurator for camera and ground station setup.

  ![OpenIPC Companion WFB settings screen](/images/fpv-related-openipc-companion-wfb.webp)
- [OpenIPC Configurator](https://github.com/OpenIPC/configurator) - Windows configurator for simplifying camera and ground side configuration.

  ![OpenIPC Configurator running on Windows](/images/fpv-related-openipc-configurator.webp)
- [OpenIPC FPV Presets](https://github.com/OpenIPC/fpv-presets) - ready-to-use presets for common FPV camera scenarios such as racing, freestyle, and long-range flights.

  ![OpenIPC Companion presets screen](/images/fpv-related-fpv-presets.webp)

## Viewer and video tools

- [Aviateur](https://github.com/OpenIPC/aviateur) - OpenIPC FPV ground station application for Windows and Linux, based on [fpv4win](https://github.com/OpenIPC/fpv4win). It lets a PC or laptop display the video feed.

  ![Aviateur OpenIPC FPV ground station interface](/images/fpv-related-aviateur-ground-station.webp)
- [PixelPilot RK](https://github.com/OpenIPC/PixelPilot_rk) - low-latency ground station decoder for Rockchip-based boards. It uses GStreamer and the Rockchip [MPP library](https://github.com/rockchip-linux/mpp), supports OSD data over MAVLink, and shows link and decode statistics. The project is based on Gee He's [FPVue_rk](https://github.com/gehee/FPVue_rk).

  ![PixelPilot RK on-screen display and link statistics](/images/fpv-related-pixelpilot-rk.webp)
- [PixelPilot for Android](https://github.com/OpenIPC/PixelPilot) - Android application for decoding live H.264/H.265 video streams from WFB-NG. It supports arm64-v8a and armeabi-v7a Android devices, including Meta Quest 2/3 in non-VR mode.

  ![PixelPilot Android video and OSD interface](/images/fpv-related-pixelpilot-android.webp)

## Link and telemetry components

- [MSP OSD](https://github.com/OpenIPC/msposd) - overlays Betaflight, INAV, or ArduPilot OSD data onto the camera-side video stream.

  ![MSP OSD overlay on an FPV video feed](/images/fpv-related-msposd-osd.webp)
- [MAVFWD](https://github.com/OpenIPC/mavfwd) - forwards MAVLink telemetry between WiFi broadcast devices and UART for one-way or bidirectional telemetry between an aircraft and ground station.
- [Adaptive link](https://github.com/OpenIPC/adaptive-link) - adjusts video bitrate and Wi-Fi rate according to link quality and can retransmit lost video frames.
- [Divinus](https://github.com/OpenIPC/divinus) - open-source cross-platform streamer and an alternative to the closed Majestic streamer.
