<template>
    
    <div class="p-0 m-0" style="height:100vh; width:100%">
        <!--<div class="map-header flex items-center shadow-sm border-l-2 border-cyan-500">
           <h2 class="map-logo text-black">SNIA</h2>
           <router-link :to="{name:'stats'}" class="absolute right-4 rounded-md border border-transparent transition-all duration-500 px-4 py-2 text-sm font-medium bg-cyan-500 text-white shadow-sm hover:bg-cyan-800">Statistics preview</router-link>
        </div>-->
        <map-prev url='assets/data.geojson' />
    </div>
</template>



<script>
    import MapPrev from "@/components/mapJsonGeo.vue"
    export default {
        name: 'MapPreview',

        components:{
            MapPrev
        }
    }
</script>

<style>
.map-header{
    position: absolute;
    bottom: 25px;
    width: 300px;
    left:25px;
    height: 66px;
    background-color: rgb(255, 255, 255);
    z-index: 999;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

}

.map-logo {
    font-weight: 900;
    font-size: 1.7em;
    line-height: 40px;
    margin-left: 15px;
}

.map-logo::before {
    height: 3px;
    width: 65px;
    position: absolute;
    bottom: 10px;
    left: 15px;
    content: "";
    background-color: #fd1d26;
}

.map-logo::after {
    height: 3px;
    width: 45px;
    left: 15px;
    position: absolute;
    bottom: 10px;
    content: "";
    background-image: linear-gradient(to right, #00b9ff 50%, #ffff00 50%);
}

</style>
