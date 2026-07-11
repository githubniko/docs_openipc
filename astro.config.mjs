import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: "http://openipc.egorniko.ru",
	base: "/",
	integrations: [
		starlight({
			title: "Documentation",
			defaultLocale: "root",
			locales: {
				root: { label: "English", lang: "en" },
				ru: { label: "Русский", lang: "ru" },
			},
			customCss: ["./src/tailwind.css"],
			social: { github: "https://github.com/OpenIPC" },
			logo: {
				light: "./src/assets/logo/OpenIPC__OPENIPC_logo_vertical.svg",
				dark: "./src/assets/logo/OpenIPC__OPENIPC_logo_vertical_white.svg",
			},
			editLink: { baseUrl: "https://github.com/OpenIPC/docs/edit/main/" },
			components: { Head: "./src/components/Head.astro" },
			sidebar: [
				{ label: "Getting Started", collapsed: true, items: [
					{ label: "Homepage", link: "/getting-started/homepage" },
					{ label: "About the Project", link: "/getting-started/introduction/" },
					{ label: "Quick Start", link: "/getting-started/quick-start/" },
					{ label: "Roadmap", link: "/getting-started/roadmap/" },
				] },
				{ label: "Hardware", collapsed: true, items: [
					{ label: "Overview", link: "/hardware/" },
					{ label: "SBCs", collapsed: true, autogenerate: { directory: "/hardware/sbcs" } },
					{ label: "Air Units", collapsed: true, items: [
						{ label: "Runcam", collapsed: true, autogenerate: { directory: "/hardware/air-units/runcam" } },
						{ label: "OpenIPC", collapsed: true, autogenerate: { directory: "/hardware/air-units/openipc" } },
						{ label: "Others", link: "/hardware/air-units/others/" },
					] },
					{ label: "Cameras", collapsed: true, autogenerate: { directory: "/hardware/cameras" } },
					{ label: "Wi-Fi Adapters", collapsed: true, autogenerate: { directory: "/hardware/wi-fi-adapters" } },
					{ label: "Displays", link: "/hardware/displays/" },
				] },
				{ label: "Firmware & Recovery", collapsed: true, autogenerate: { directory: "/firmware-recovery" } },
				{ label: "Software & Tools", collapsed: true, items: [
					{ label: "Overview", link: "/software-tools/" },
					{ label: "OpenIPC Builder", link: "/software-tools/openipc-builder/" },
					{ label: "Companion", link: "/software-tools/companion/" },
					{ label: "Aviateur", link: "/software-tools/aviateur/" },
				] },
				{ label: "System Components", collapsed: true, items: [
					{ label: "MSP OSD", link: "/system-components/msp-osd/" },
					{ label: "MAVFWD", link: "/system-components/mavfwd/" },
					{ label: "Joystick", link: "/system-components/joystick/" },
					{ label: "PixelPilot RK", link: "/system-components/pixelpilot-rk/" },
					{ label: "PixelPilot Android", link: "/system-components/pixelpilot-android/" },
					{ label: "Bidirectional Link", link: "/system-components/bidirectional-link/" },
					{ label: "Divinus", link: "/system-components/divinus/" },
					{ label: "Majestic", link: "/system-components/majestic/" },
					{ label: "Sysupgrade", link: "/system-components/sysupgrade/" },
					{ label: "Web UI", link: "/system-components/web-ui/" },
					{ label: "Web UI Development", link: "/system-components/web-ui-development/" },
					{ label: "Zoom", link: "/system-components/zoom/" },
				] },
				{ label: "Use Cases", collapsed: true, items: [
					{ label: "Camera Surveillance", link: "/use-cases/camera-surveillance/" },
					{ label: "FPV over WFB-NG", collapsed: true, autogenerate: { directory: "/use-cases/fpv-over-wfb-ng" } },
					{ label: "AP FPV over Wi-Fi", collapsed: true, autogenerate: { directory: "/use-cases/ap-fpv-over-wi-fi" } },
					{ label: "OpenWrt", link: "/use-cases/openwrt/" },
					{ label: "YouTube Streaming", link: "/use-cases/youtube-streaming/" },
				] },
				{ label: "Development", collapsed: true, items: [
					{ label: "Contribution Guidelines", link: "/development/contribution-guidelines/" },
					{ label: "Projects & Applications", link: "/development/projects-applications/", badge: { text: "WIP", variant: "caution" } },
				] },
				{ label: "Resources", collapsed: true, items: [
					{ label: "Frequently Asked Questions", link: "/resources/faq/", badge: { text: "WIP", variant: "caution" } },
					{ label: "Useful Links", link: "/resources/useful-links/", badge: { text: "WIP", variant: "caution" } },
				] },
				{ label: "Reference", collapsed: true, autogenerate: { directory: "reference" } },
				{ label: "Team", link: "/team/" },
			],
		}),
		tailwind({ applyBaseStyles: false }),
	],
	redirects: {
		"/": "/getting-started/homepage",
		"/hardware/hardware-page": "/hardware/",
		"/software/software-page": "/software-tools/",
		"/software/general-uart-flashing-guide": "/firmware-recovery/general-uart-flashing-guide/",
		"/software/sysupgrade": "/firmware-recovery/online-sysupgrade/",
		"/software/firmware-updates": "/firmware-recovery/firmware-updates/",
		"/software/web-ui": "/system-components/web-ui/",
		"/development/webface-guide": "/system-components/web-ui-development/",
		"/use-cases/fpv/net-cards/rtl8812eu": "/hardware/wi-fi-adapters/bl-m8812eu2-rtl8812eu/",
		"/use-cases/fpv/net-cards/rtl8812au": "/hardware/wi-fi-adapters/bl-r8812af1-rtl8812au/",
		"/use-cases/fpv/net-cards/rtl8731bu": "/hardware/wi-fi-adapters/bl-m8731bu3-rtl873xbu/",
		"/hardware/OpenIPC/VRX/openipc-bonnet": "/hardware/sbcs/openipc-bonnet/",
		"/hardware/OpenIPC/VTX/fpv-mario-aio": "/hardware/air-units/openipc/openipc-mario-aio/",
		"/hardware/OpenIPC/VTX/fpv-thinker-aio": "/hardware/air-units/openipc/openipc-thinker-air-unit/",
		"/hardware/Runcam/VTX/runcam-wifilink-v1": "/hardware/air-units/runcam/runcam-wifilink1/",
		"/hardware/Runcam/VTX/runcam-wifilink-v2": "/hardware/air-units/runcam/runcam-wifilink2/",
	},
});

