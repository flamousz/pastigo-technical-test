<script setup>
import CardStatus from "../components/CardStatus.vue";

const cards = [
	{
		name: "Inprogress",
		bgColor: "bg-bg-blue-pickup",
		textColor: "text-text-blue-pickup",
	},
	{
		name: "Inprogress",
		bgColor: "bg-bg-blue-pickup",
		textColor: "text-text-blue-pickup",
	},
	{
		name: "Inprogress",
		bgColor: "bg-bg-blue-pickup",
		textColor: "text-text-blue-pickup",
	},
	{
		name: "Inprogress",
		bgColor: "bg-bg-blue-pickup",
		textColor: "text-text-blue-pickup",
	},
	{
		name: "Inprogress",
		bgColor: "bg-bg-blue-pickup",
		textColor: "text-text-blue-pickup",
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
