<script setup>
import { ref, watch } from "vue";
import eyesPassword from "../assets/Frameeyes.png";
import HeaderPassword from "../components/HeaderPassword.vue";

const passwordData = ref([]);
const isPassword = ref(true);
const showPassword = ref(["password", "password", "password"]);

const handleShowPassword = (input) => {
	showPassword.value[input] =
		showPassword.value[input] === "password" ? "text" : "password";
};

watch(
	() => passwordData.value,
	(newValue) => {
		newValue.length > 7 && passwordData.value.length
			? (isPassword.value = true)
			: (isPassword.value = false);
	}
);
</script>

<template>
	<div class="flex flex-col gap-3 px-4">
		<HeaderPassword :headerName="'Ubah Kata Sandi'" />
		<form
			class="w-full flex flex-col gap-8 text-text-black-success-password-header"
		>
			<div class="relative w-full">
				<input
					:type="showPassword[0]"
					class="placeholder:text-base placeholder:font-google-sans w-full p-2 rounded-md border-2 font-google-sans"
					placeholder="Kata sandi baru"
					v-model="passwordData"
				/>
				<button
					@click="() => handleShowPassword(0)"
					type="button"
					tabindex="-1"
					class="absolute inset-y-0 right-2 flex items-center px-2"
				>
					<img :src="eyesPassword" alt="eyes password" width="20" />
				</button>
				<p
					v-show="!isPassword"
					class="absolute left-0 right-0 -bottom-5 font-roboto text-[13px] text-text-grey-1"
				>
					kata sandi minimal 8 karakter
				</p>
			</div>
			<div class="relative w-full">
				<input
					:type="showPassword[1]"
					class="placeholder:text-base placeholder:font-google-sans w-full p-2 rounded-md border-2"
					placeholder="Ketik ulang kata sandi baru"
				/>
				<button
					@click="() => handleShowPassword(1)"
					type="button"
					tabindex="-1"
					class="absolute inset-y-0 right-2 flex items-center px-2"
				>
					<img :src="eyesPassword" alt="eyes password" width="20" />
				</button>
			</div>
			<div class="relative w-full">
				<input
					:type="showPassword[2]"
					class="placeholder:text-base placeholder:font-google-sans w-full p-2 rounded-md border-2"
					placeholder="Konfirmasi Kata Sandi"
				/>
				<button
					@click="() => handleShowPassword(2)"
					type="button"
					tabindex="-1"
					class="absolute inset-y-0 right-2 flex items-center px-2"
				>
					<img :src="eyesPassword" alt="eyes password" width="20" />
				</button>
			</div>
		</form>
		<p
			class="font-poppins font-medium text-xs my-1 p-2 border-[1px] border-gray-300 bg-bg-grey-1 text-text-grey-1 rounded-lg"
		>
			Setelah kata sandi diubah, silakan masuk kembali dengan kata sandi baru
			di semua per perangakat
		</p>
		<RouterLink
			to="/newpassword/success"
			@click="doneChecker"
			class="bg-red-button-1 text-center w-full pt-4 py-3 text-white rounded-xl font-google-sans font-medium"
		>
			Ubah Kata Sandi
		</RouterLink>
		<RouterLink
			to="/forgotpassword"
			@click="doneChecker"
			class="text-center w-full pt-4 py-3 text-red-button-1 rounded-xl font-google-sans font-medium"
		>
			Lupa Kata Sandi?
		</RouterLink>
	</div>
</template>
