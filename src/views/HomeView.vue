<script setup>
import { ref } from "vue";

import logoExpress from "../assets/Frame-8543.png";

const logoExpressRef = ref(logoExpress);

</script>

<template>
	<main class="min-h-screen grid place-content-center">
		<img
			class="grid place-content-center h-auto min-w-fit"
			:src="logoExpress"
			alt="logo express"
		/>
	</main>
</template>
