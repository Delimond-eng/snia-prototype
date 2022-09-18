<template>
<div >
    <div id="main-wrapper">
        <router-view />
    </div>
</div>
</template>

<script>
/* eslint-disable */
import MapPrev from '@/components/sateliteMapView.vue'
export default {
    name: "App",
    components: {
        MapPrev,
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
