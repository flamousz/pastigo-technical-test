<script setup>
import { ref } from "vue";
import arrowBack from "../assets/arrow_back.png";
import redmail from "../assets/red-mail.png";

const arrowBackRef = ref(arrowBack);
const redmailRef = ref(redmail);

const doneEmail = ref(false);

const doneChecker = () => {
	doneEmail.value = !doneEmail.value;
};
</script>

<template>
	<main class="h-screen px-3 flex flex-col gap-5">
		<div class="flex flex-row w-full pt-5">
			<RouterLink :to="'/login'" class="w-[7%]">
				<img
					:src="arrowBackRef"
					alt="arrow-back"
					width="25"
					height="auto"
				/>
			</RouterLink>
			<h1 class="w-[90%] text-center text-lg font-semibold">
				Lupa Kata Sandi
			</h1>
		</div>

		<div class="flex flex-col gap-3" v-if="!doneEmail">
			<h1 class="text-base font-medium">Atur ulang kata sandi</h1>
			<p class="text-sm font-normal text-text-grey-1">
				Masukan email atau nomor HP yang terdaftar. Kami akan kode verikasi
				untuk atur ulang kata sandi.
			</p>
			<form class="w-full flex flex-col gap-4">
				<input
					type="text"
					class="placeholder:text-base border-2 w-full p-2 rounded-md"
					placeholder="Email / Nomor Telepon"
				/>

				<button
					@click="doneChecker"
					class="bg-red-button-1 w-full pt-4 py-3 text-white rounded-xl"
				>
					Lanjutkan
				</button>
			</form>
		</div>
		<div v-if="doneEmail" class="flex flex-col items-center text-center">
			<img :src="redmailRef" alt="red mail" width="80" height="auto" />
			<h1 class="text-base font-medium">Masukan Kode Verifikasi</h1>
			<p class="text-sm font-normal text-text-grey-1">
				Kode verifikasi telah kami kirim melalui email adv*******@gmail.com
			</p>
			<form>
				<div
					class="flex flex-row items-center justify-center  w-[80%] px-3 gap-2"
				>
					<div class="w-[16.6%]">
						<input
							class="w-full h-full flex flex-col items-center justify-center text-center  outline-none  border-b-2 border-black text-2xl font-bold "
							type="text"
							name=""
							id=""
						/>
					</div>
					<div class="w-[16.6%] h-16">
						<input
							class="w-full h-full flex flex-col items-center justify-center text-center  outline-none rounded-xl border border-gray-200 text-lg "
							type="text"
							name=""
							id=""
						/>
					</div>
					<div class="w-[16.6%] h-16">
						<input
							class="w-full h-full flex flex-col items-center justify-center text-center  outline-none rounded-xl border border-gray-200 text-lg "
							type="text"
							name=""
							id=""
						/>
					</div>
					<div class="w-[16.6%] h-16">
						<input
							class="w-full h-full flex flex-col items-center justify-center text-center  outline-none rounded-xl border border-gray-200 text-lg "
							type="text"
							name=""
							id=""
						/>
					</div>
					<div class="w-[16.6%] h-16">
						<input
							class="w-full h-full flex flex-col items-center justify-center text-center  outline-none rounded-xl border border-gray-200 text-lg "
							type="text"
							name=""
							id=""
						/>
					</div>
					<div class="w-[16.6%] h-16">
						<input
							class="w-full h-full flex flex-col items-center justify-center text-center  outline-none rounded-xl border border-gray-200 text-lg "
							type="text"
							name=""
							id=""
						/>
					</div>
				</div>
			</form>
			<p class="text-sm font-normal text-text-grey-1">
				mohon tunggu dalam 30 tetik untuk verifikasi ulang
			</p>
		</div>
	</main>
</template>
