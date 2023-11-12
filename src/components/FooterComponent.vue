<script setup>
import { useRoute, useRouter } from "vue-router";
import homeIdle from "../assets/FooterIcons/home-icon-idle.png";
import homeActive from "../assets/FooterIcons/home-icon-active.png";
import courierActive from "../assets/FooterIcons/courier-active.png";
import accountIdle from "../assets/FooterIcons/account-idle.png";
import accountActive from "../assets/FooterIcons/account-active.png";
import nearbyIdle from "../assets/FooterIcons/nearby-idle.png";
import notificationIdle from "../assets/FooterIcons/notification-idle.png";
import { computed } from "vue";

const route = useRoute();

const getTabImage = (tabName, activeImage, idleImage) => {
	return computed(() => (tabName === route.name ? activeImage : idleImage));
};

const tabImageDashboard = getTabImage("dashboard", homeActive, homeIdle);
const tabImageAccount = getTabImage("account", accountActive, accountIdle);
</script>

<template>
	<footer
		class="max-w-[500px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white sticky bottom-0 flex flex-row px-3 py-1 justify-between"
	>
		<RouterLink :to="'/user/dashboard'" class="flex flex-col items-center">
			<img
				:src="tabImageDashboard"
				alt="home idle icon"
				class="h-auto min-w-fit"
			/>
			<p class="font-roboto font-normal text-[10px] text-text-footer-grey">
				Beranda
			</p>
		</RouterLink>
		<RouterLink :to="'/user/nearby'" class="flex flex-col items-center">
			<img
				:src="nearbyIdle"
				alt="nearby idle icon"
				class="h-auto min-w-fit"
			/>
			<p class="font-roboto font-normal text-[10px] text-text-footer-grey">
				Nearby
			</p>
		</RouterLink>
		<RouterLink
			:to="'/user/courier'"
			class="flex flex-col items-center justify-end relative"
		>
			<img
				:src="courierActive"
				alt="courier active icon"
				class="h-auto min-w-fit absolute -top-[26px]"
			/>
			<p class="font-roboto font-normal text-[10px] text-text-footer-grey">
				Paket Anda
			</p>
		</RouterLink>
		<RouterLink :to="'/user/notification'" class="flex flex-col items-center">
			<img
				:src="notificationIdle"
				alt="notification idle icon"
				class="h-auto min-w-fit"
			/>
			<p class="font-roboto font-normal text-[10px] text-text-footer-grey">
				Notifications
			</p>
		</RouterLink>
		<RouterLink :to="'/user/account'" class="flex flex-col items-center">
			<img
				:src="tabImageAccount"
				alt="account idle icon"
				class="h-auto min-w-fit"
			/>
			<p class="font-roboto font-normal text-[10px] text-text-footer-grey">
				Account
			</p>
		</RouterLink>
	</footer>
</template>
