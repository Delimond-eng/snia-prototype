<template>
  <div>
    <div class="top-bar">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <span class="top-email-info">
              <router-link
                to="/"
                class="little-logo"
                data-aos="fade-right"
                style="font-weight: 900; font-size: 1.6em"
                >SNIA</router-link
              >
            </span>
          </div>
          <!-- end col-sm-6  -->
        </div>
        <!-- end .row  -->
      </div>
      <!--  end .container -->
    </div>
    <!-- end main-header  -->

    <div style="height: 100vh; width: 100%; position: relative;">
      <map-prev url="assets/data.geojson" />
    </div>
  </div>
</template>

<script>
import MapPrev from "@/components/mapJsonGeo.vue";
export default {
  name: "MapPreview",

  components: {
    MapPrev,
  },
};
</script>

<style>
.map-header {
  position: absolute;
  bottom: 25px;
  width: 300px;
  left: 25px;
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