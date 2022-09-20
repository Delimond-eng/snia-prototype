<template>
<div >
    <div id="main-wrapper">
        <router-view />
    </div>
</div>
</template>

<script>
export default {
    name: "App",
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
