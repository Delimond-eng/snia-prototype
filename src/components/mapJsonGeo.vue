<template>
  <div id="viewDiv" class="shadow">
    <div id="baseMapDiv" class="h-[100px]"></div>
  </div>
</template>

<script>
/* eslint-disable */
import Map from "@arcgis/core/Map";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import MapView from "@arcgis/core/views/SceneView";
import Search from "@arcgis/core/widgets/Search";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
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
      this.isLoading = true;
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

        visualVariables: [
          {
            type: "color",
            field: "climat_id",
            legendOptions: {
              showLegend: true,
            },
            stops: [
              { value: 1, color: "orange" },
              { value: 2, color: "red" },
              { value: 3, color: "cyan" },
            ],
          },
          {
            type: "size",
            field: "Production",
            legendOptions: {
              showLegend: true,
            },
            minDataValue: 100,
            maxDataValue: 2000,
            minSize: 8,
            maxSize: 18,
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
        basemap: "gray-vector",
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
      view.ui.add(basemapGallery, "bottom-right");
      // places the search widget in the top right corner of the view
      view.ui.add(search, "top-right");

      view.when(() => {
        this.isLoading = false;
        console.log("Map ready");
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