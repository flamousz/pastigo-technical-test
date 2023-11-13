<script setup>
import { ref } from "vue";
import boarding from "../assets/Group 37345.png";

const boardingRef = ref(boarding);
</script>

<template>
	<main class="min-h-screen flex flex-col text-center items-center">
		<img :src="boardingRef" alt="boarding"  class="h-auto min-w-fit mt-20" />
		<h1 class="text-lg font-poppins font-bold text-text-black-1">Apps Kurir</h1>
		<h2 class="text-text-grey-1 font-normal font-poppins text-xs w-2/3 ">
			Siapkan strategi khusus untuk mengatasi keluhan pelanggan.
		</h2>
		<RouterLink
			to="/login"
			class="bg-red-button-1 text-center w-3/4 mt-16 max-w-lg pt-4 py-3 text-white rounded-xl font-google-sans font-medium"
		>
			Mulai Sekarang
		</RouterLink>
	</main>
</template>
