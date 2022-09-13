<template>
    <div class="map-view">
    </div>
</template>

<script>
import ArcGISMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";
import Legend from "@arcgis/core/widgets/Legend";

export default {
    name:"ArcGis Map",
    props:{
       msg:String,
    },
    mounted(){
        const map = new ArcGISMap({
            portalItem:{
                id: this.msg,
            }
         });

         const view = new MapView({
            map,
            container:this.$el
         });

        view.when(()=>{
            console.log("Map view is ready");
            const featureLayer = map.layers.getItemAt(0);
            const legend = new Legend({
            view: view,
            layerInfos: [
              {
                layer: featureLayer,
                title: "Legende"
              }
            ]
          });
          view.ui.add(legend, "bottom-right");
        });
    },

}
</script>

<style>
    @import url("https://js.arcgis.com/4.24/esri/themes/light/main.css");
    .map-view {
        height: 100%;
        width: 100%;
    }
</style>