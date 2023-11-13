<script setup>
import CardStatus from "../components/CardStatus.vue";

const cards = [
	{
		name: "Pending",
		bgColor: "bg-bg-status-pending",
		textColor: "text-text-status-pending",
	},
	{
		name: "Pending",
		bgColor: "bg-bg-status-pending",
		textColor: "text-text-status-pending",
	},
	{
		name: "Pending",
		bgColor: "bg-bg-status-pending",
		textColor: "text-text-status-pending",
	},
	{
		name: "Pending",
		bgColor: "bg-bg-status-pending",
		textColor: "text-text-status-pending",
	},
	{
		name: "Pending",
		bgColor: "bg-bg-status-pending",
		textColor: "text-text-status-pending",
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
