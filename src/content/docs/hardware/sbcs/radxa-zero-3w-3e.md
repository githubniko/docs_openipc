---
title: Radxa Zero 3 W/E
description: Radxa Zero 3 W/E notes for OpenIPC ground station use.
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

## Related Pages

- [OpenIPC SBC Ground Stations](/hardware/sbcs/sbc-groundstations/)
- [PixelPilot RK](/system-components/pixelpilot-rk/)
- [Adaptive Link](/system-components/adaptive-link/)

## Sources

- [JohnDGodwin/zero3w-gs](https://github.com/JohnDGodwin/zero3w-gs)
- [OpenIPC SBC groundstations](https://github.com/OpenIPC/sbc-groundstations)
- [zhouruixi/SBC-GS](https://github.com/zhouruixi/SBC-GS)
- [zhouruixi/SBC-GS releases](https://github.com/zhouruixi/SBC-GS/releases/)
