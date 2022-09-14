<template>
<div>
    <nav-header/>
    <router-view />
</div>
</template>

<script>
import NavHeader from '@/components/navbar.vue'
export default {
    name: "App",
    components: {
        NavHeader
    }
}
</script>

<style>
.nav-btn{
    position:absolute; 
    background-color:#00b9ff; 
    color:#fff; 
    top: 20px; 
    right: 10px;
}
</style>
