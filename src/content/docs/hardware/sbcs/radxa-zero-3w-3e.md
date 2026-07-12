---
title: Radxa Zero 3 W/E
description: Radxa Zero 3 W/E notes for OpenIPC ground station use.
sidebar:
  order: 40
---

Radxa Zero 3W and Zero 3E boards are common small SBC choices for OpenIPC FPV ground stations. The related resources page recommends at least 2 GB RAM, with 4 GB preferred, and at least 8 GB eMMC or SD storage, with 16 GB preferred.

## Ground Station Image Options

There are several source trees and image projects around Radxa Zero 3 ground stations:

- [JohnDGodwin/zero3w-gs](https://github.com/JohnDGodwin/zero3w-gs) provides overlay files and an installation script for building a RadxaOS SDK image that runs as an OpenIPC ground station.
- [OpenIPC SBC groundstations](https://github.com/OpenIPC/sbc-groundstations) is the current unified Buildroot-based OpenIPC ground station image builder.
- [zhouruixi/SBC-GS](https://github.com/zhouruixi/SBC-GS) is an alternative Radxa Zero 3 ground station project with its own configuration layout and release images.

## Typical Ground Station Services

The `zero3w-gs` README says its install script sets up a `/config` area for user settings and scripts, OpenIPC streaming through systemd, a media server for DVR, Wi-Fi drivers, WFB-NG, PixelPilot, and hot-plug handling for WFB network adapters.

The alternative SBC-GS project documents a centralized `/config/gs.conf`, WFB key storage on the FAT32 config partition, button and keyboard controls, LED status, Wi-Fi/Ethernet/USB networking, PixelPilot/FPVue/GStreamer player options, USB gadget functions, fan control, multiple Realtek Wi-Fi drivers, USB Wi-Fi hotplug, SMB sharing, recording storage, and stream forwarding over USB tethering or Ethernet.

## Firmware Images

Use the [latest OpenIPC SBC Ground Station release page](https://github.com/OpenIPC/sbc-groundstations/releases/tag/latest) as the entry point for Radxa Zero 3 firmware. For current Buildroot images, follow the Buildroot Edition link to the `buildroot-snapshot` release and use the `radxa_zero3_*` files.

Older Stock Edition images are still linked from the same page for existing installations, including `zero3w-v1.9.9`, `zero3w-v2.0.0-beta2`, and `zero3w-apfpv-v0.0.1`.

## Related Pages

- [OpenIPC SBC Ground Stations](/software-tools/sbc-groundstations/)
- [PixelPilot RK](/system-components/pixelpilot-rk/)
- [Adaptive Link](/system-components/adaptive-link/)

## Sources

- [JohnDGodwin/zero3w-gs](https://github.com/JohnDGodwin/zero3w-gs)
- [OpenIPC SBC groundstations](https://github.com/OpenIPC/sbc-groundstations)
- [zhouruixi/SBC-GS](https://github.com/zhouruixi/SBC-GS)
- [zhouruixi/SBC-GS releases](https://github.com/zhouruixi/SBC-GS/releases/)
