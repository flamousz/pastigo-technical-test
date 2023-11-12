<script setup>
import { ref, watch } from "vue";
import redmail from "../assets/red-mail.png";
import Otp from "../components/Otp.vue";
import HeaderPassword from "../components/HeaderPassword.vue";

const redmailRef = ref(redmail);
const doneEmail = ref(false);
const isVerification = ref(false);

const doneChecker = () => {
	doneEmail.value = !doneEmail.value;
	const timer = setInterval(updateCountdown, 1000);
	return () => setInterval(timer);
};

const verificationChecker = () => {
	isVerification.value = !isVerification.value;
};

const countDown = ref(3);

const updateCountdown = () => {
	if (countDown.value > 0) {
		countDown.value--;
	}
};

const resetCountdown = () => {
	countDown.value = 3;
	verificationChecker();
};

watch(
	() => countDown.value,
	(newValue) => {
		if (newValue === 0) {
			verificationChecker();
		}
	}
);
</script>

<template>
	<main class="h-screen px-3 flex flex-col gap-5">
		<HeaderPassword />
		<div v-if="!doneEmail" class="flex flex-col gap-3">
			<h1 class="text-base font-medium font-roboto">
				Atur ulang kata sandi
			</h1>
			<p class="text-sm font-normal font-roboto text-text-grey-1">
				Masukan email atau nomor HP yang terdaftar. Kami akan kode verikasi
				untuk atur ulang kata sandi.
			</p>
			<form class="w-full flex flex-col gap-4">
				<input
					type="text"
					class="placeholder:text-base placeholder:font-medium border-2 w-full p-2 placeholder:font-google-sans rounded-md"
					placeholder="Email / Nomor Telepon"
				/>

				<button
					@click="doneChecker"
					class="bg-red-button-1 w-full pt-4 py-3 text-white rounded-xl font-google-sans font-medium"
				>
					Lanjutkan
				</button>
			</form>
		</div>
		<div v-if="doneEmail" class="flex flex-col items-center text-center">
			<img
				:src="redmailRef"
				alt="red mail"
				width="80"
				height="auto"
				class="py-3"
			/>
			<h1 class="text-base font-medium font-roboto py-3">
				Masukan Kode Verifikasi
			</h1>
			<p class="text-sm font-normal text-text-grey-1 px-2 font-roboto">
				Kode verifikasi telah kami kirim melalui email adv*******@gmail.com
			</p>
			<form class="px-3 py-5">
				<Otp :digit-count="6"></Otp>
			</form>
			<p
				v-show="!isVerification"
				class="text-sm font-normal font-roboto text-text-grey-1 px-5 py-5"
			>
				mohon tunggu dalam {{ countDown }} detik untuk verifikasi ulang
			</p>
			<div v-show="isVerification" class="flex flex-row gap-3">
				<p class="text-sm font-normal font-roboto text-text-grey-1 py-5">
					Tidak menerima kode?
				</p>
				<button
					class="text-sm font-normal font-roboto text-red-button-1 py-5"
					@click="resetCountdown"
				>
					Kirim ulang
				</button>
			</div>
		</div>
	</main>
</template>
