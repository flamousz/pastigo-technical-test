<script setup>
import { useRoute } from "vue-router";
import HeaderPassword from "../components/HeaderPassword.vue";

const route = useRoute();

const handleSelectedBorder = (routeName) => {
	return route.name === routeName ? "border-red-button-1 text-text-black-1" : "border-red-100 text-text-grey-1";
};
</script>

<template>
	<main class="min-h-screen flex flex-col gap-5 relative">
		<div class="flex flex-col gap-5 sticky bg-white top-0">
			<HeaderPassword :headerName="'Pickup'" class="px-3" />

			<ul
				class="flex flex-row w-full text-center font-google-sans font-medium text-sm "
			>
				<li
					class="border-b-2  w-1/4 pb-2"
					:class="handleSelectedBorder('pending')"
				>
					<RouterLink to="/pickup/pending" class="">Pending</RouterLink>
				</li>
				<li
					class="border-b-2 w-1/4 pb-2"
					:class="handleSelectedBorder('progresspickup')"
				>
					<RouterLink to="/pickup/progress">In Progress</RouterLink>
				</li>
				<li
					class="border-b-2 w-1/4 pb-2"
					:class="handleSelectedBorder('successpickup')"
				>
					<RouterLink to="/pickup/success">Success</RouterLink>
				</li>
				<li
					class="border-b-2 w-1/4 pb-2"
					:class="handleSelectedBorder('troublepickup')"
				>
					<RouterLink to="/pickup/trouble">Trouble</RouterLink>
				</li>
			</ul>
		</div>
		<router-view></router-view>
	</main>
</template>
