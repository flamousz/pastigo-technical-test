<script setup>
import { ref } from "vue";
import arrowBack from "../assets/arrow_back.png";
import { useRouter } from "vue-router";

const route = useRouter();

const props = defineProps({
	headerName: {	
		type: String,
	},
});

const arrowBackRef = ref(arrowBack);

const goBack = () => {
	props.headerName === 'Pickup' ? route.push('/user/dashboard') : route.go(-1);
	
};
</script>

<template>
	<div class="flex flex-row w-full pt-5">
		<button @click="goBack">
			<img :src="arrowBackRef" alt="arrow-back" class="h-auto min-w-fit" />
		</button>
		<h1
			class="w-[90%] text-center text-lg font-google-sans text-text-black-success-password-header font-bold"
		>
			{{ props.headerName }}
		</h1>
	</div>
</template>
