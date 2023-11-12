<script setup>
import HeaderPassword from '../components/HeaderPassword.vue';


</script>


<template>
    <main class="h-screen px-3 flex flex-col gap-5">
        <HeaderPassword/>
        <router-view></router-view>
    </main>
</template>