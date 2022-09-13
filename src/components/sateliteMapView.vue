<template>
    <div class="map-view">
        <div id="viewDiv"></div>
        <div id="timeSlider">
        </div>
        <div id="titleDiv" class="esri-widget">
            <div id="titleText">Precipitation forecast for next 72 hours </div>
        </div>
    </div>
</template>

<script>
import Map from "@arcgis/core/Map"
import MapView from "@arcgis/core/views/MapView"
import FeatureLayer from "@arcgis/core/layers/FeatureLayer"
import Legend from "@arcgis/core/widgets/Legend"
import TimeSlider from "@arcgis/core/widgets/TimeSlider"
import Expand from "@arcgis/core/widgets/Expand"
export default {
    name: "SateliteMapView",

    props: {
        url:String
    },

    mounted() {
        this.loadMap()
    },
    methods: {
        loadMap() {
            const layer = new FeatureLayer({
                url:
                    "https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/NDFD_Precipitation_v1/FeatureServer/0"
            });

            const map = new Map({
                basemap: "hybrid",
                layers: [layer]
            });

            const view = new MapView({
                map: map,
                container: "viewDiv",
                zoom: 3,
                center: [-100, 30]
            });

            // time slider widget initialization
            const timeSlider = new TimeSlider({
                container: "timeSlider",
                view: view,
                timeVisible: true, // show the time stamps on the timeslider
                loop: true
            });

            // add the UI for a title
            view.ui.add("titleDiv", "top-right");


            view.whenLayerView(layer).then((lv) => {
                console.log(lv);
                // around up the full time extent to full hour
                timeSlider.fullTimeExtent = layer.timeInfo.fullTimeExtent.expandTo("hours");
                timeSlider.stops = {
                    interval: layer.timeInfo.interval
                };
            });


            const legend = new Legend({
                view: view
            });
            const legendExpand = new Expand({
                expandIconClass: "esri-icon-legend",
                expandTooltip: "Legend",
                view: view,
                content: legend,
                expanded: false
            });
            view.ui.add(legendExpand, "top-left");
        }
    },
}
</script>

<style>
@import url("https://js.arcgis.com/4.24/esri/themes/light/main.css");

html,
body,
.map-view,
#viewDiv {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
}
#timeSlider {
    position: absolute;
    left: 5%;
    right: 5%;
    bottom: 20px;
}

#titleDiv {
    padding: 10px;
    font-weight: 36;
    text-align: center;
}
</style>