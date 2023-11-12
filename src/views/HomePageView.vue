<script setup>
import { ref } from "vue";
import photoProfileHomepage from "../assets/photo-profile-homepage.png";
import carHomepage from "../assets/car-homepage.png";

const isChecked = ref(false);
const isSwitch = ref("OFF");

const handleSwitch = () => {
	isSwitch.value = isSwitch.value === "OFF" ? "ON" : "OFF";
};
const handleChecked = () => {
	isChecked.value = !isChecked.value;
	handleSwitch();
};
</script>

<template>
	<main class="flex flex-col items-center max-w-lg">
		<div
			class="bg-[url('../assets/header-dashboard.png')] px-3 flex flex-col gap-2 items-center bg-contain min-w-full min-h-screen bg-no-repeat"
		>
			<div class="text-center pt-12">
				<h3 class="font-google-sans text-xs font-normal text-white">
					Abang Express
				</h3>
				<h2 class="font-google-sans text-base font-bold text-white">
					Agen Jogjakarta
				</h2>
			</div>
			<div
				class="flex flex-row rounded-lg min-w-full p-4 justify-between bg-white drop-shadow-md"
			>
				<div class="flex flex-row gap-2 justify-between items-center">
					<div>
						<img
							:src="photoProfileHomepage"
							alt="photo profile"
							class="h-auto min-w-fit"
						/>
					</div>
					<div>
						<div
							class="font-poppins font-medium text-sm text-text-grey-pp-homepage-1"
						>
							Daniel Fernando
						</div>
						<div
							class="font-poppins font-medium text-[10px] text-text-grey-pp-homepage-1 opacity-50"
						>
							Daniel @gmail.com
						</div>
					</div>
				</div>
				<div class="flex items-center gap-1 justify-between">
					<h1
						class="font-poppins text-xs font-normal text-text-switch opacity-50"
					>
						{{ isSwitch }}
					</h1>
					<label for="toggle" class="cursor-pointer">
						<input
							type="checkbox"
							id="toggle"
							class="sr-only peer"
							@click="handleChecked"
						/>
						<div
							class="block relative w-14 h-7 rounded-full before:absolute before:top-[2px] before:bg-gradient-to-r from-white to-gradient-switch-end before:w-6 before:h-6 before:p-1 before:rounded-full before:transition-all before:duration-500 before:left-1 peer-checked:before:left-7 transition-bg ease-in-out duration-500"
							:class="{
								'bg-bg-grey-cool': !isChecked,
								'bg-red-500': isChecked,
							}"
						></div>
					</label>
				</div>
			</div>
			<div class="min-w-full grid grid-cols-2 gap-y-2 gap-x-4">
				<div
					class="shadow-[0_3px_10px_rgb(0,0,0,0.1)] bg-white rounded-2xl flex flex-row p-4 items-center gap-3"
				>
					<div>
						<img
							:src="carHomepage"
							alt="car logo"
							class="h-auto min-w-content"
						/>
					</div>
					<div>
						<h1 class="font-poppins font-normal text-xs text-text-grey-1">
							Pending
						</h1>
						<h1 class="font-poppins font-medium text-xs text-black">
							1 pickup
						</h1>
					</div>
				</div>
				<div
					class="shadow-[0_3px_10px_rgb(0,0,0,0.1)] bg-white rounded-2xl flex flex-row p-4 items-center gap-3"
				>
					<div>
						<img
							:src="carHomepage"
							alt="car logo"
							class="h-auto min-w-content"
						/>
					</div>
					<div>
						<h1 class="font-poppins font-normal text-xs text-text-grey-1">
							Inprogress
						</h1>
						<h1 class="font-poppins font-medium text-xs text-black">
							1 pickup
						</h1>
					</div>
				</div>
				<div
					class="shadow-[0_3px_10px_rgb(0,0,0,0.1)] bg-white rounded-2xl flex flex-row p-4 items-center gap-3"
				>
					<div>
						<img
							:src="carHomepage"
							alt="car logo"
							class="h-auto min-w-content"
						/>
					</div>
					<div>
						<h1 class="font-poppins font-normal text-xs text-text-grey-1">
							Success
						</h1>
						<h1 class="font-poppins font-medium text-xs text-black">
							1 pickup
						</h1>
					</div>
				</div>
				<div
					class="shadow-[0_3px_10px_rgb(0,0,0,0.1)] bg-white rounded-2xl flex flex-row p-4 items-center gap-3"
				>
					<div>
						<img
							:src="carHomepage"
							alt="car logo"
							class="h-auto min-w-content"
						/>
					</div>
					<div>
						<h1 class="font-poppins font-normal text-xs text-text-grey-1">
							Trouble
						</h1>
						<h1 class="font-poppins font-medium text-xs text-black">
							1 pickup
						</h1>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>
