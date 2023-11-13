<script setup>
import photoAccount from "../assets/photo-account.png";
import lockIcon from "../assets/AccountIcons/lock.png";
import rightArrowIcon from "../assets/AccountIcons/right-arrow.png";
import starIcon from "../assets/AccountIcons/star.png";
import bellIcon from "../assets/AccountIcons/bell.png";
import questionIcon from "../assets/AccountIcons/question.png";
import checklistIcon from "../assets/AccountIcons/checklist.png";
import exitIcon from "../assets/AccountIcons/exit.png";
import { ref } from "vue";
import Modal from "../components/Modal.vue";
import { useRouter } from "vue-router";

const route = useRouter();

const isModal = ref(false);

const handleModal = () => {
	isModal.value = !isModal.value;
	isModal.value
		? document.body.classList.add("no-scroll")
		: document.body.classList.remove("no-scroll");
};
</script>

<template>
	<main
		class="bg-[url('../assets/header-account.png')] min-h-[calc(100vh-55px)] max-w-xl mx-auto bg-contain bg-no-repeat"
	>
		<Modal :isModal="isModal" @handleModal="handleModal" />

		<div class="px-4 flex flex-col gap-3 mb-8 pt-8">
			<h1
				class="font-google-sans font-bold text-lg text-black text-center mb-3"
			>
				Akun
			</h1>
			<div
				class="flex flex-row justify-between items-center p-3 bg-white rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.1)]"
			>
				<div class="flex flex-row items-center gap-2">
					<img
						:src="photoAccount"
						alt="photo account"
						class="h-auto min-w-[32px]"
					/>
					<div class="flex flex-col">
						<h2
							class="font-roboto font-medium text-base text-text-black-1"
						>
							Albertus Pangaribuan
						</h2>
						<p class="font-poppins font-normal text-xs text-text-grey-2">
							+62822-8058-1234
						</p>
						<p class="font-poppins font-normal text-xs text-text-grey-2">
							advenreey@gmail.com
						</p>
					</div>
				</div>
				<button
					class="font-poppins font-medium text-xs text-red-button-1"
					@click="route.push('/changeprofile')"
				>
					Ubah
				</button>
			</div>
		</div>
		<div class="flex flex-col px-4 gap-9">
			<button
				@click="route.push('/resetpassword')"
				class="flex flex-row justify-between"
			>
				<div class="flex flex-row gap-2 items-center">
					<img :src="lockIcon" alt="lock icon" class="h-auto max-w-fit" />
					<p class="font-poppins font-normal text-sm text-text-grey-2">
						Ganti Kata Sandi
					</p>
				</div>
				<img
					:src="rightArrowIcon"
					alt="right arrow icon"
					class="h-auto min-w-fit flex items-center"
				/>
			</button>
			<div class="flex flex-row justify-between">
				<div class="flex flex-row gap-2 items-center">
					<img :src="starIcon" alt="star icon" class="h-auto max-w-fit" />
					<p class="font-poppins font-normal text-sm text-text-grey-2">
						Beri Nilai Aplikasi
					</p>
				</div>
				<img
					:src="rightArrowIcon"
					alt="right arrow icon"
					class="h-auto min-w-fit flex items-center"
				/>
			</div>
			<div class="flex flex-row justify-between">
				<div class="flex flex-row gap-2 items-center">
					<img
						:src="bellIcon"
						alt="notification icon"
						class="h-auto max-w-fit"
					/>
					<p class="font-poppins font-normal text-sm text-text-grey-2">
						Notifikasi
					</p>
				</div>
				<img
					:src="rightArrowIcon"
					alt="right arrow icon"
					class="h-auto min-w-fit flex items-center"
				/>
			</div>
			<div class="flex flex-row justify-between">
				<div class="flex flex-row gap-2 items-center">
					<img
						:src="questionIcon"
						alt="question icon"
						class="h-auto max-w-fit"
					/>
					<p class="font-poppins font-normal text-sm text-text-grey-2">
						Bantuan
					</p>
				</div>
				<img
					:src="rightArrowIcon"
					alt="right arrow icon"
					class="h-auto min-w-fit flex items-center"
				/>
			</div>
			<div class="flex flex-row justify-between">
				<div class="flex flex-row gap-2 items-center">
					<img
						:src="checklistIcon"
						alt="checklist icon"
						class="h-auto max-w-fit"
					/>
					<p class="font-poppins font-normal text-sm text-text-grey-2">
						Kebijakan Privasi
					</p>
				</div>
				<img
					:src="rightArrowIcon"
					alt="right arrow icon"
					class="h-auto min-w-fit flex items-center"
				/>
			</div>
			<div class="flex flex-row justify-between">
				<button
					@click="handleModal"
					class="flex flex-row gap-2 items-center"
				>
					<img :src="exitIcon" alt="exit icon" class="h-auto max-w-fit" />
					<p class="font-poppins font-normal text-sm text-text-grey-2">
						Keluar
					</p>
				</button>
			</div>
		</div>
	</main>
</template>


