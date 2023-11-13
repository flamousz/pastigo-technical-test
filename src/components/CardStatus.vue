<script setup>
import carHomepage from "../assets/car-homepage.png";
import locationIcon from '../assets/location-icon.png'

const props = defineProps({
    cardData: {
        type: Object
    }
})

</script>

<template>
	<div
		class="flex flex-col p-4 shadow-[0_3px_10px_rgb(0,0,0,0.1)] bg-white rounded-xl"
	>
		<div class="flex flex-row justify-between">
			<div class="flex flex-row gap-2">
				<img :src="carHomepage" alt="car icon" class="h-8 w-8" />
				<div>
					<h1 class="font-poppins font-medium text-xs text-text-black-1">
						#1234566788
					</h1>
					<h1 class="font-poppins font-normal text-xs text-text-grey-1">
						10 Sep 2021
					</h1>
				</div>
			</div>
			<h1
				class=" h-fit px-2 py-1 font-poppins font-normal text-[10px]  rounded-xl"
                :class="[props.cardData.bgColor, props.cardData.textColor]"
			>
				{{ props.cardData.name }}
			</h1>
		</div>
		<hr class="border-[1px] mt-3 mb-2" />
		<div class="flex flex-row justify-between mb-2">
			<div class="flex flex-row justify-between w-[45%]">
				<div>
					<div class="font-poppins font-normal text-xs text-text-grey-1">
						Berat
					</div>
					<div
						class="font-poppins font-normal text-xs text-text-black-success-password-header"
					>
						32 Kg
					</div>
				</div>
				<div>
					<div class="font-poppins font-normal text-xs text-text-grey-1">
						Total Paket
					</div>
					<div
						class="font-poppins font-normal text-xs text-text-black-success-password-header"
					>
						50
					</div>
				</div>
			</div>
			<div class="w-1/2">
				<div>
					<div
						class="font-poppins font-normal text-xs text-text-grey-1 text-right"
					>
						Estimasi
					</div>
					<div
						class="font-poppins font-normal text-xs text-text-black-success-password-header text-right"
					>
						10 Sep 2021, 20:20 WIB
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-row bg-bg-orange-warning p-2 rounded-xl gap-[6px]">
			<div>
				<img
					:src="locationIcon"
					alt="location icon"
					class="h-auto min-w-fit"
				/>
			</div>
			<div class="flex flex-col gap-2">
				<p
					class="font-poppins font-medium text-xs text-text-black-success-password-header"
				>
					Kost
				</p>
				<p class="font-poppins font-normal text-[11.1px] text-text-grey-1">
					Jl. Ampera Raya No. 133, RT.05/RW.10, Ragunan, Kec. Ps. Minggu,
					Kota Jakarta....
				</p>
			</div>
		</div>
	</div>
</template>
