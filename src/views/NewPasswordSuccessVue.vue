<script setup>
import successImage from "../assets/Frame.png";
</script>

<template>
	<main class="flex flex-col gap-2">
		<div class="flex flex-col items-center text-center pt-10 px-2 gap-2">
			<img
				:src="successImage"
				alt="success reset password"
				class="h-auto max-w-full"
			/>
			<h1
				class="font-google-sans text-lg text-text-black-success-password-h1 font-bold"
			>
				Kata sandi berhasil diubah
			</h1>
			<p
				class="font-poppins font-normal text-center text-text-black-success-password text-xs leading-relaxed"
			>
				Pakai kata sandi baru untuk masuk lagi ke aplikasi abang express
				kurir, jangan berikan kesiapapun ya!
			</p>
		</div>
		<RouterLink class="w-full pt-4" :to="'/login'">
			<button class="bg-red-button-1 font-google-sans text-sm font-medium py-3 w-full text-white rounded-xl">
				Masuk
			</button>
		</RouterLink>
	</main>
</template>
