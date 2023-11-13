<script setup>
import arrowDown from "../assets/arrow-down.png";
import HeaderPassword from "../components/HeaderPassword.vue";
import photoProfile from "../assets/photo-account.png";
import { ref } from "vue";

const dataProfile = ref({
    name: 'Albertus Pangaribuan',
    email: 'Demo@gmail.com',
    phone: '0822 8058 5903',
    birtDate: '10 / 12 / 1994',
    gender: 'Laki-Laki',
    province: 'DKI Jakarta',
    town: 'Grogol',
    address: 'Jl. tomang 1 dst'
})


</script>

<template>
	<div class="flex flex-col gap-3 px-4 relative max-w-xl mx-auto">
		<HeaderPassword
			:headerName="'Ubah Profil'"
			class="sticky top-0 z-50 bg-white"
		/>
		<div class="flex flex-row items-center gap-4 mt-5 mb-2">
			<img
				:src="photoProfile"
				alt="photo profile"
				class="h-auto max-w-fit"
			/>
			<div class="font-poppins font-normal text-[10px] text-text-black-1">
				<p>Semua orang akan</p>
				<p>dapat melihat foto Kamu..</p>
			</div>
		</div>
		<form
			class="w-full flex flex-col gap-4 font-google-sans font-normal text-base text-text-black-1"
		>
			<div class="relative w-full">
				<input
                    v-model="dataProfile.name"
					class="placeholder:text-base placeholder:font-google-sans w-full p-2 rounded-md border-2"
					placeholder="Ketik ulang nama baru"
				/>
				<p
					class="font-google-sans font-medium absolute -top-2 left-2 px-1 bg-white text-xs text-text-grey-pp-homepage-1"
				>
					Nama<span
						class="font-source-sans-pro text-text-red-important font-semibold text-[11px]"
						>*</span
					>
				</p>
			</div>
			<div class="relative w-full">
				<input
					class="placeholder:text-base placeholder:font-google-sans w-full p-2 rounded-md border-2"
                    v-model="dataProfile.email"
					placeholder="Ketik ulang email baru"
				/>
				<p
					class="font-google-sans font-medium absolute -top-2 left-2 px-1 bg-white text-xs text-text-grey-pp-homepage-1"
				>
					Email<span
						class="font-source-sans-pro text-text-red-important font-semibold text-[11px]"
						>*</span
					>
				</p>
			</div>
			<div class="relative w-full">
				<input
					class="placeholder:text-base placeholder:font-google-sans w-full p-2 rounded-md border-2"
					placeholder="Ketik ulang nomor handphone baru"
                    v-model="dataProfile.phone"
				/>
				<p
					class="font-google-sans font-medium absolute -top-2 left-2 px-1 bg-white text-xs text-text-grey-pp-homepage-1"
				>
					Nomor Handphone<span
						class="font-source-sans-pro text-text-red-important font-semibold text-[11px]"
						>*</span
					>
				</p>
			</div>
			<div class="relative w-full">
				<input
					class="placeholder:text-base placeholder:font-google-sans w-full p-2 rounded-md border-2"
					placeholder="Ketik ulang nomor handphone baru"
                    v-model="dataProfile.birtDate"
				/>
				<p
					class="font-google-sans font-medium absolute -top-2 left-2 px-1 bg-white text-xs text-text-grey-pp-homepage-1"
				>
					Tanggal Lahir
				</p>
			</div>
			<div class="relative w-full">
				<input
					class="placeholder:text-base placeholder:font-google-sans w-full p-2 rounded-md border-2"
					placeholder="Ketik ulang jenis kelamin baru"
                    v-model="dataProfile.gender"
				/>
				<p
					class="font-google-sans font-medium absolute -top-2 left-2 px-1 bg-white text-xs text-text-grey-pp-homepage-1"
				>
					Jenis Kelamin
				</p>
				<button
					type="button"
					tabindex="-1"
					class="absolute inset-y-0 right-2 flex items-center px-2"
				>
					<img
						:src="arrowDown"
						alt="eyes password"
						class="h-auto max-w-fit"
					/>
				</button>
			</div>
			<div class="relative w-full">
				<input
					class="placeholder:text-base placeholder:font-google-sans w-full p-2 rounded-md border-2"
					placeholder="Ketik ulang provinsi baru"
                    v-model="dataProfile.province"
				/>
				<p
					class="font-google-sans font-medium absolute -top-2 left-2 px-1 bg-white text-xs text-text-grey-pp-homepage-1"
				>
					Provinsi
				</p>
				<button
					type="button"
					tabindex="-1"
					class="absolute inset-y-0 right-2 flex items-center px-2"
				>
					<img
						:src="arrowDown"
						alt="eyes password"
						class="h-auto max-w-fit"
					/>
				</button>
			</div>
			<div class="relative w-full">
				<input
					class="placeholder:text-base placeholder:font-google-sans w-full p-2 rounded-md border-2"
					placeholder="Ketik ulang kabupaten baru"
                    v-model="dataProfile.town"
				/>
				<p
					class="font-google-sans font-medium absolute -top-2 left-2 px-1 bg-white text-xs text-text-grey-pp-homepage-1"
				>
					Kabupaten
				</p>
				<button
					type="button"
					tabindex="-1"
					class="absolute inset-y-0 right-2 flex items-center px-2"
				>
					<img
						:src="arrowDown"
						alt="eyes password"
						class="h-auto max-w-fit"
					/>
				</button>
			</div>
			<div class="relative w-full">
				<input
					class="placeholder:text-base placeholder:font-google-sans w-full p-2 rounded-md border-2"
					placeholder="Ketik ulang nomor handphone baru"
                    v-model="dataProfile.address"
				/>
				<p
					class="font-google-sans font-medium absolute -top-2 left-2 px-1 bg-white text-xs text-text-grey-pp-homepage-1"
				>
					Alamat Lengkap
				</p>
				<p
					class="font-roboto font-normal text-[13px]  absolute -bottom-6 right-0 px-1   text-text-grey-1"
				>
					1 / 150
				</p>
			</div>
		</form>
		<RouterLink
			to="/user/account"
			class="bg-red-button-1 text-center w-full pt- my-7 py-3  text-white rounded-lg font-google-sans font-medium"
		>
			Simpan
		</RouterLink>
	</div>
</template>
