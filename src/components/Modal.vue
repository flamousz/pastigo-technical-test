<script setup>
import { useRouter } from "vue-router";

const route = useRouter();
const props = defineProps({
	isModal: {
		type: Boolean,
	},
});

const emits = defineEmits(["handleModal"]);

const handleModalEmit = () => {
	emits("handleModal");
};

const handleModalContentClick = (event) => {
	event.stopPropagation();
};
</script>

<template>
	<Transition
		enter-active-class="transition-opacity duration-500 ease-in-out"
		leave-active-class="transition-opacity duration-500 ease-in-out"
		enter-from-class="opacity-0"
		leave-to-class="opacity-0"
		><div
			v-show="props.isModal"
			class="absolute z-40 w-full opacity-70 bg-text-black-success-password-h1 min-h-full grid place-content-center"
		></div
	></Transition>
	<Transition
		enter-active-class="transition-opacity duration-500 ease-in-out"
		leave-active-class="transition-opacity duration-500 ease-in-out"
		enter-from-class="opacity-0"
		leave-to-class="opacity-0"
		><div
			v-show="props.isModal"
			class="z-50 absolute grid place-content-center min-h-full w-full"
			@click="handleModalEmit"
		>
			<div
				@click="handleModalContentClick"
				class="bg-white pt-3 px-4 pb-5 rounded-xl flex flex-col gap-2"
			>
				<h1
					class="font-google-sans font-bold text-lg text-text-black-success-password-h1"
				>
					Keluar dari Abang Express Kurir.
				</h1>
				<p
					class="font-roboto font-normal text-sm text-text-black-success-password-h1"
				>
					Apakah Anda yakin ingin keluar?
				</p>
				<div
					class="font-google-sans font-medium text-xs flex justify-end gap-3"
				>
					<button @click="handleModalEmit" class="text-text-grey-1">
						BATAL
					</button>
					<button @click="route.push('/login')" class="text-red-button-1">
						KELUAR
					</button>
				</div>
			</div>
		</div></Transition
	>
</template>
