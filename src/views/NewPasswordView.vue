<script setup>
import HeaderPassword from '../components/HeaderPassword.vue';


</script>


<template>
    <main class="h-screen px-4 flex flex-col gap-5 max-w-xl mx-auto">
        <HeaderPassword :headerName="'Lupa Kata Sandi'" />
        <router-view></router-view>
    </main>
</template>