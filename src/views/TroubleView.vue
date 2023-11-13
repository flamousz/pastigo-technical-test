<script setup>
import CardStatus from "../components/CardStatus.vue";

const cards = [
	{
		name: "Trouble",
		bgColor: "bg-bg-red-pickup",
		textColor: "text-text-red-pickup",
	},
	{
		name: "Trouble",
		bgColor: "bg-bg-red-pickup",
		textColor: "text-text-red-pickup",
	},
	{
		name: "Trouble",
		bgColor: "bg-bg-red-pickup",
		textColor: "text-text-red-pickup",
	},
	{
		name: "Trouble",
		bgColor: "bg-bg-red-pickup",
		textColor: "text-text-red-pickup",
	},
	{
		name: "Trouble",
		bgColor: "bg-bg-red-pickup",
		textColor: "text-text-red-pickup",
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
