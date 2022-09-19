<template>
  <div id="viewDiv" class="shadow">
    <div id="baseMapDiv" style="height: 200px; width: 100px"></div>
    <div id="map-filter" style="display: none">
      <a href="#" @click="$emit('onFiltered')" class="esri-button"
        ><i class="fa fa-bar-chart" style="margin-right: 2px"></i> Filtrer les
        données à afficher</a
      >
    </div>
    <div id="export" style="display: none">
      <a href="#" class="esri-button"
        ><i class="fa fa-print" style="margin-right: 2px"></i> Exporter la
        cartographie</a
      >
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Map from "@arcgis/core/Map";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import MapView from "@arcgis/core/views/SceneView";
import Search from "@arcgis/core/widgets/Search";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import Print from "@arcgis/core/widgets/Print";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import LayerList from "@arcgis/core/widgets/LayerList";
import PopupTemplate from "@arcgis/core/PopupTemplate";
import CustomContent from "@arcgis/core/popup/content/CustomContent";
import Query from "@arcgis/core/rest/support/Query";
import query from "@arcgis/core/rest/query";
import StatisticDefinition from "@arcgis/core/rest/support/StatisticDefinition";
import Intl from "@arcgis/core/intl";

import TileLayer from "@arcgis/core/layers/TileLayer";
import Measurement from "@arcgis/core/widgets/Measurement";
import Legend from "@arcgis/core/widgets/Legend";

import DictionaryRenderer from "@arcgis/core/renderers/DictionaryRenderer";
import Expand from "@arcgis/core/widgets/Expand";
import Graphic from "@arcgis/core/Graphic";
import Home from "@arcgis/core/widgets/Home";

export default {
  name: "MapJsonGeo",
  data() {
    return {
      isLoading: false,
    };
  },
  props: {
    url: String,
  },
  destroyed() {
    this.$router.go(-1);
    console.log("destroyed");
  },
  mounted() {
    this.loadMap();
  },
  methods: {
    loadMap() {
      const url = this.url;
      /*const template = {
        title: "SNIA Cartographie agricole",
        content:
          "Estimation de recolte {mag} tonnes/mois {type} \n Endroit : {place}",
        fieldInfos: [
          {
            fieldName: "time",
            format: {
              dateFormat: "short-date-short-time",
            },
          },
        ],
      };*/
      const template = {
        title: "SNIA Cartographie agricole",
        content: [
          {
            type: "fields", // Autocasts as new FieldsContent()
            // Autocasts as new FieldInfo[]
            fieldInfos: [
              {
                fieldName: "Production",
              },
              {
                fieldName: "Production_unite",
              },
              {
                fieldName: "Nbre_agriculteur",
              },
              {
                fieldName: "Territoire",
              },
              {
                fieldName: "Province",
              },
              {
                fieldName: "climat_libelle",
              },
              {
                fieldName: "sol",
              },
            ],
          },
        ],
      };
      const renderer = {
        type: "simple",
        symbol: {
          type: "simple-marker",
          style: "circle",
          color: [250, 250, 250],
          outline: {
            color: [255, 255, 255, 0.5],
            width: 0.5,
          },
        },
        attributes: [
          {
            label: "Climat",
            field: "climat_id",
          },
          {
            field: "Production",
            label: "Production",
          },
        ],
        visualVariables: [
          {
            type: "color",
            field: "climat_id",
            legendOptions: {
              showLegend: true,
            },
            stops: [
              { value: 1, color: "#2a1a8a" },
              { value: 2, color: "#de4fa6" },
              { value: 3, color: "#4fadd0" },
            ],
          },
          {
            type: "size",
            field: "Production",
            minDataValue: 100,
            maxDataValue: 2500,
            minSize: 12,
            maxSize: 20,
          },
        ],
      };

      const geojsonLayer = new GeoJSONLayer({
        url: url,
        copyright: "Analyse de données agricoles de la Rep. Dem. du Congo",
        popupTemplate: template,
        renderer: renderer,
        orderBy: {
          field: "Production",
        },
      });
      const map = new Map({
        basemap: "topo-vector",
        layers: [geojsonLayer],
      });
      const view = new MapView({
        container: "viewDiv",
        center: [22.95, -6.651],
        zoom: 7,
        map: map,
      });
      const basemapGallery = new BasemapGallery({
        view: view,
        container: "baseMapDiv",
      });

      const home = new Home({
        view: view,
      });

      const legend = new Legend({
        view: view,
      });

      /*const layerList = new LayerList({
        view: view,
        listItemCreatedFunction: (event) => {
          const item = event.item;
          if (item.layer.type != "group") {
            // don't show legend twice
            item.panel = {
              content: basemapGallery,
              open: false,
            };
          }
        },
      });*/

      const search = new Search({
        view: view,
      });

      //map legend
      legend.style = "card";

      //home btn
      view.ui.add(home, "top-left");
      //search bar
      view.ui.add(search, "top-right");
      //view loading init
      /*const print = new Print({
        view: view,
        printServiceUrl: this.url,
      });*/
      view.ui.add(basemapGallery, "bottom-right");
      view.ui.add(legend, "bottom-left");
      //view.ui.add(print, "top-right");
      view.when(() => {
        document.getElementById("export").style.display = "block";
        document.getElementById("map-filter").style.display = "block";
        view.ui.add("export", "top-right");
        view.ui.add("map-filter", "top-left");
        const layer = view.map.layers.getItemAt(0);
        layer.title = "Legende de données agricoles";
      });
    },
  },
};
</script>

<style>
@import url("https://js.arcgis.com/4.24/esri/themes/light/main.css");

#viewDiv {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
}

.esri-view:focus,
.esri-view:focus {
  border: none;
}

#titleDiv {
  position: absolute;
  height: 55px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #f8f8f8;
  background: #464646;
  z-index: 1;
}

.esri-icon-basemap::before {
  content: "\2913";
}

.esri-attribution__sources,
.esri-component.esri-attribution.esri-widget {
  display: none;
}
</style>