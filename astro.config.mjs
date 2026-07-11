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
				{ label: "Getting Started", translations: { ru: "Начало работы" }, collapsed: true, items: [
					{ label: "Homepage", translations: { ru: "Главная" }, link: "/getting-started/homepage" },
					{ label: "About the Project", translations: { ru: "О проекте" }, link: "/getting-started/introduction/" },
					{ label: "Quick Start", translations: { ru: "Быстрый старт" }, link: "/getting-started/quick-start/" },
					{ label: "Roadmap", translations: { ru: "Дорожная карта" }, link: "/getting-started/roadmap/" },
				] },
				{ label: "Hardware", translations: { ru: "Оборудование" }, collapsed: true, items: [
					{ label: "Overview", translations: { ru: "Обзор" }, link: "/hardware/" },
					{ label: "SBCs", translations: { ru: "Одноплатные компьютеры" }, collapsed: true, autogenerate: { directory: "/hardware/sbcs" } },
					{ label: "Air Units", translations: { ru: "Передающие модули" }, collapsed: true, items: [
						{ label: "Runcam", collapsed: true, autogenerate: { directory: "/hardware/air-units/runcam" } },
						{ label: "OpenIPC", collapsed: true, autogenerate: { directory: "/hardware/air-units/openipc" } },
						{ label: "Others", translations: { ru: "Другие" }, link: "/hardware/air-units/others/" },
					] },
					{ label: "Cameras", translations: { ru: "IP-камеры" }, collapsed: true, autogenerate: { directory: "/hardware/cameras" } },
					{ label: "Wi-Fi Adapters", translations: { ru: "Wi-Fi адаптеры" }, collapsed: true, autogenerate: { directory: "/hardware/wi-fi-adapters" } },
					{ label: "Displays", translations: { ru: "Дисплеи" }, link: "/hardware/displays/" },
				] },
				{ label: "Firmware & Recovery", translations: { ru: "Прошивка и восстановление" }, collapsed: true, autogenerate: { directory: "/firmware-recovery" } },
				{ label: "Software & Tools", translations: { ru: "ПО и инструменты" }, collapsed: true, items: [
					{ label: "Overview", translations: { ru: "Обзор" }, link: "/software-tools/" },
					{ label: "OpenIPC Builder", link: "/software-tools/openipc-builder/" },
					{ label: "Companion", link: "/software-tools/companion/" },
					{ label: "Aviateur", link: "/software-tools/aviateur/" },
				] },
				{ label: "System Components", translations: { ru: "Системные компоненты" }, collapsed: true, items: [
					{ label: "MSP OSD", link: "/system-components/msp-osd/" },
					{ label: "MAVFWD", link: "/system-components/mavfwd/" },
					{ label: "Joystick", translations: { ru: "Джойстик" }, link: "/system-components/joystick/" },
					{ label: "PixelPilot RK", link: "/system-components/pixelpilot-rk/" },
					{ label: "PixelPilot Android", link: "/system-components/pixelpilot-android/" },
					{ label: "Bidirectional Link", translations: { ru: "Двунаправленный канал" }, link: "/system-components/bidirectional-link/" },
					{ label: "Divinus", link: "/system-components/divinus/" },
					{ label: "Majestic", link: "/system-components/majestic/" },
					{ label: "Sysupgrade", link: "/system-components/sysupgrade/" },
					{ label: "Web UI", link: "/system-components/web-ui/" },
					{ label: "Web UI Development", translations: { ru: "Разработка Web UI" }, link: "/system-components/web-ui-development/" },
					{ label: "Zoom", link: "/system-components/zoom/" },
				] },
				{ label: "Use Cases", translations: { ru: "Сценарии использования" }, collapsed: true, items: [
					{ label: "Camera Surveillance", translations: { ru: "Видеонаблюдение" }, link: "/use-cases/camera-surveillance/" },
					{ label: "FPV over WFB-NG", translations: { ru: "FPV через WFB-NG" }, collapsed: true, autogenerate: { directory: "/use-cases/fpv-over-wfb-ng" } },
					{ label: "AP FPV over Wi-Fi", translations: { ru: "AP FPV через Wi-Fi" }, collapsed: true, autogenerate: { directory: "/use-cases/ap-fpv-over-wi-fi" } },
					{ label: "OpenWrt", link: "/use-cases/openwrt/" },
					{ label: "YouTube Streaming", translations: { ru: "Стриминг на YouTube" }, link: "/use-cases/youtube-streaming/" },
				] },
				{ label: "Development", translations: { ru: "Разработка" }, collapsed: true, items: [
					{ label: "Contribution Guidelines", translations: { ru: "Правила участия" }, link: "/development/contribution-guidelines/" },
					{ label: "Projects & Applications", translations: { ru: "Проекты и применения" }, link: "/development/projects-applications/", badge: { text: "WIP", variant: "caution" } },
				] },
				{ label: "Resources", translations: { ru: "Ресурсы" }, collapsed: true, items: [
					{ label: "Frequently Asked Questions", translations: { ru: "Частые вопросы" }, link: "/resources/faq/", badge: { text: "WIP", variant: "caution" } },
					{ label: "Useful Links", translations: { ru: "Полезные ссылки" }, link: "/resources/useful-links/", badge: { text: "WIP", variant: "caution" } },
				] },
				{ label: "Reference", translations: { ru: "Справочник" }, collapsed: true, autogenerate: { directory: "reference" } },
				{ label: "Team", translations: { ru: "Команда" }, link: "/team/" },
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

