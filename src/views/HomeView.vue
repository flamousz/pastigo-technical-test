<script setup>
import { onMounted } from "vue";
import logoExpress from "../assets/Frame-8543.png";
import { useRouter } from "vue-router";

const route = useRouter()

onMounted(() => {
	setTimeout(() => {
		route.push('/boarding')
	}, 2000)
})

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
