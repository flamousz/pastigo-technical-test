<script setup>
import { ref, reactive } from "vue";
import router from '../router'
import { useToast } from "vue-toastification";

const props = defineProps({
	default: String,

	digitCount: {
		type: Number,
		required: true,
	},
});



const digits = reactive([]);
const toast = useToast();

if (props.default && props.default.length === props.digitCount) {
	for (let i = 0; i < props.digitCount; i++) {
		digits[i] = props.default.charAt(i);
	}
} else {
	for (let i = 0; i < props.digitCount; i++) {
		digits[i] = null;
	}
}

const otpCont = ref(null);

const handleKeyDown =  (event, index) => {
    
    if (
		event.key !== "Tab" &&
		event.key !== "ArrowRight" &&
		event.key !== "ArrowLeft"
	) {
		event.preventDefault();
	}

	if (event.key === "Backspace") {
		digits[index] = null;

		if (index != 0) {
			otpCont.value.children[index - 1].focus();
		}

		return;
	}

	if (new RegExp("^([0-9])$").test(event.key)) {
		digits[index] = event.key;

		if (index != props.digitCount - 1) {
			otpCont.value.children[index + 1].focus();
		}
	}

    if (index === 5) {
        toast.success('OTP Code accepted')
        setTimeout(() => router.push('/newpassword/form'), 2000)
    }
    
};
</script>

<template>
	<div ref="otpCont" class="flex flex-row gap-4 ">
		<input
			type="text"
			class="w-full h-full flex flex-col items-center justify-center text-center outline-none border-b-2 text-text-black-1  border-gray-400 text-2xl font-bold font-poppins"
			v-for="(el, ind) in digits"
			:key="el + ind"
			v-model="digits[ind]"
			:autofocus="ind === 0"
			maxlength="1"
			@keydown="handleKeyDown($event, ind)"
		/>
	</div>
</template>
