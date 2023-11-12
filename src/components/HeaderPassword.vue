<script setup>
import { ref } from "vue";
import arrowBack from "../assets/arrow_back.png";

const arrowBackRef = ref(arrowBack);
</script>

<template>
	<div class="flex flex-row w-full pt-5">
		<RouterLink :to="'/login'" class="w-[7%]">
			<img :src="arrowBackRef" alt="arrow-back" width="25" height="auto" />
		</RouterLink>
		<h1 class="w-[90%] text-center text-lg font-google-sans text-text-black-success-password-header font-bold">
			Lupa Kata Sandi
		</h1>
	</div>
	
</template>
