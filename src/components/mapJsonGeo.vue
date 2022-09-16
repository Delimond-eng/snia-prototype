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
  mounted() {
    this.loadMap();
  },
  methods: {
    loadMap() {
      this.isLoading = true;
      const url = this.url;
      const template = {
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
      };
      const renderer = {
        type: "simple",
        field: "mag",
        symbol: {
          type: "simple-marker",
          color: "cyan",
          outline: {
            color: "yello",
            size: "5px",
          },
        },
        visualVariables: [
          {
            type: "size",
            field: "mag",
            stops: [
              {
                value: 2.5,
                size: "20px",
              },
              {
                value: 8,
                size: "40px",
              },
            ],
          },
        ],
      };
      const geojsonLayer = new GeoJSONLayer({
        url: url,
        copyright: "Analyse de données agricoles de la Rep. Dem. du Congo",
        popupTemplate: template,
        renderer: renderer,
        transparency: 0,
        orderBy: {
          field: "mag",
        },
      });
      const map = new Map({
        basemap: "hybrid",
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

      const layerList = new LayerList({
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
      });

      const search = new Search({
        view: view,
      });

      const pointGraphic = new Graphic({
        symbol: {
          type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
          color: [0, 0, 139],
          outline: {
            color: [255, 255, 255],
            width: 1.5,
          },
        },
      });

      const point = view.toMap(screenPoint);
      geojsonLayer
        .queryFeatures({
          //query object
          geometry: point,
          spatialRelationship: "intersects",
          returnGeometry: false,
          outFields: ["*"],
        })
        .then((featureSet) => {
          // set graphic location to mouse pointer and add to mapview
          pointGraphic.geometry = point;
          view.graphics.add(pointGraphic);
          // open popup of query result
          view.popup.open({
            location: point,
            features: featureSet.features,
          });
        });

      view.ui.add(layerList, "bottom-right");
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

.esri-attribution__sources,
.esri-component.esri-attribution.esri-widget {
  display: none;
}
</style>