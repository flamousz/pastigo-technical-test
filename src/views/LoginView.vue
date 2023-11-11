<script setup>
import { ref } from "vue";
import eyesPassword from "../assets/Frameeyes.png";
import illustration from "../assets/illustration.png";
const illustrationRef = ref(illustration);
const eyesPasswordRef = ref(eyesPassword);
</script>

<template>
	<main class="h-screen">
		<div
			class="border-2 bg-[url('../assets/illustration.png')] w-screen h-[35%] bg-cover"
		></div>
		<div class="flex flex-col items-center w-full border-2 px-3">
			<h1 class="text-2xl font-medium py-6">Masuk Ke Akun Mu.</h1>
			<form class="w-full flex flex-col gap-3">
				<input
					type="text"
					class="placeholder:text-base border-2 w-full p-2 rounded-md"
					placeholder="Email / Nomor Telepon"
				/>
				<div class="relative w-full">
					<input
						type="text"
						class="placeholder:text-base w-full p-2 rounded-md border-2"
						placeholder="Password"
					/>
					<button
						class="absolute inset-y-0 right-2 flex items-center px-2"
					>
						<img :src="eyesPassword" alt="eyes password" width="20" />
					</button>
				</div>
				<RouterLink
					:to="'/forgotpassword'"
					class="text-right text-red-button-1 text-xs"
				>
					Lupa Password?
				</RouterLink>
			</form>
			<RouterLink class="w-full pt-4" :to="'/homepage'">
				<button class="bg-red-button-1 py-3 w-full text-white rounded-xl">
					Masuk
				</button>
			</RouterLink>
		</div>
	</main>
</template>
