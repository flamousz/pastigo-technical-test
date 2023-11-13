<script setup>
import CardStatus from "../components/CardStatus.vue";

const cards = [
	{
		name: "Success",
		bgColor: "bg-bg-green-pickup",
		textColor: "text-text-green-pickup",
	},
	{
		name: "Success",
		bgColor: "bg-bg-green-pickup",
		textColor: "text-text-green-pickup",
	},
	{
		name: "Success",
		bgColor: "bg-bg-green-pickup",
		textColor: "text-text-green-pickup",
	},
	{
		name: "Success",
		bgColor: "bg-bg-green-pickup",
		textColor: "text-text-green-pickup",
	},
	{
		name: "Success",
		bgColor: "bg-bg-green-pickup",
		textColor: "text-text-green-pickup",
	}
];
</script>

<template>
	<main class="px-3 flex flex-col gap-4">
		<CardStatus
			v-for="(card, index) in cards"
			:key="index"
			:cardData="card"
		/>
	</main>
</template>
