<script setup>
import { ref } from "vue";
import eyesPassword from "../assets/Frameeyes.png";

const showPassword = ref(["password"]);
const handleShowPassword = (input) => {
	showPassword.value[input] =
		showPassword.value[input] === "password" ? "text" : "password";
};
</script>

<template>
	<main class="min-h-screen max-w-xl mx-auto">
		<div
			class="bg-[url('../assets/illustration.png')] flex flex-col gap-4 items-center bg-contain min-w-full min-h-screen bg-no-repeat"
		>
			<div
				class="flex bg-white mt-56 rounded-t-[28px] flex-col items-center w-full"
			>
				<h1 class="text-2xl font-medium py-6 font-google-sans">
					Masuk Ke Akun Mu.
				</h1>
				<form class="w-full flex flex-col gap-3 px-4">
					<input
						type="text"
						class="placeholder:text-base border-2 w-full p-2 rounded-md"
						placeholder="Email / Nomor Telepon"
					/>
					<div class="relative w-full">
						<input
							:type="showPassword[0]"
							class="placeholder:text-base w-full p-2 rounded-md border-2"
							placeholder="Password"
						/>
						<button
							class="absolute inset-y-0 right-2 flex items-center px-2"
							@click.prevent="() => handleShowPassword(0)"
						>
							<img :src="eyesPassword" alt="eyes password" class="h-auto max-w-fit" />
						</button>
					</div>
					<RouterLink
						:to="'/forgotpassword'"
						class="text-right text-red-button-1 text-xs"
					>
						Lupa Password?
					</RouterLink>
				</form>
				<RouterLink class="w-full pt-4 px-4" :to="'/user/dashboard'">
					<button
						class="bg-red-button-1 font-google-sans text-sm font-medium py-3 w-full text-white rounded-xl"
					>
						Masuk
					</button>
				</RouterLink>
			</div>
		</div>
	</main>
</template>
