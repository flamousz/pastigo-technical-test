<script setup>
import { ref } from "vue";
import boarding from "../assets/Group 37345.png";

const boardingRef = ref(boarding);
</script>

<template>
	<main class="min-h-screen flex flex-col text-center items-center">
		<img :src="boardingRef" alt="boarding" width="300" class="pt-12" />
		<h1 class="text-[18px] font-bold text-text-black-1">Apps Kurir</h1>
		<h2 class="text-text-grey-1 font-normal text-xs w-1/2">
			Siapkan strategi khusus untuk mengatasi keluhan pelanggan.
		</h2>
		<RouterLink class="fixed bottom-6 w-2/3" :to="'/login'">
			<button class="bg-red-button-1 py-3 w-full text-white rounded-xl">
				Mulai Sekarang
			</button>
		</RouterLink>
	</main>
</template>
