---
title: OpenIPC SBC Ground Stations
description: Official Buildroot-based ground station image project for OpenIPC FPV receivers.
---

OpenIPC SBC groundstations is the current unified OpenIPC ground station image builder. Its README describes it as a Buildroot 2 based image builder for supported receiver hardware.

## Supported Hardware Listed Upstream

The repository lists support for RunCam Wifilink, Emax Wyvern-Link, Radxa Zero3 using one of those receiver options, and OpenIPC Bonnet.

## Flashing and Updates

For eMMC devices, the project documents an SD-card assisted flashing method that boots a small card image and writes the full image to eMMC through U-Boot. Boards without eMMC can use a normal SD-card image. Advanced methods include `dd` from a booted system, bootloader-only flashing, and maskrom flashing with RKDevTool or `rkdeveloptool`.

Once flashed, the image can be updated from a package copied to a FAT SD card, the DVR partition, or eMMC storage. The README also documents `sysupgrade -u -r`, local `build.sh ssh-flash`, and local `build.sh flash` workflows.

## Runtime Features

The README documents factory reset through the right button during boot or `firstboot`. It also describes a gadget mode triggered with the left button during boot, exposing DVR access, serial access, and a network interface at `192.168.5.1` through the OTG port.

## Sources

- [OpenIPC SBC groundstations repository](https://github.com/OpenIPC/sbc-groundstations)
- [OpenIPC SBC groundstation releases](https://github.com/OpenIPC/sbc-groundstations/releases/tag/latest)
