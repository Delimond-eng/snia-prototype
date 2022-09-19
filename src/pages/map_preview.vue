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

    <div style="height: 100vh; width: 100%; position: relative">
      <map-prev url="assets/data.geojson" @onFiltered="openModal" />
    </div>

    <div class="gmodal" id="gmodal" data-animation="slideInOutLeft">
      <div class="gmodal-dialog">
        <header class="gmodal-header">
          Cartographie
          <button
            class="close-modal"
            aria-label="close modal"
            @click="closeModal"
          >
            ✕
          </button>
        </header>
        <section class="gmodal-content">
          <p>
            <strong
              >Veuillez sélectionner les données à afficher dans la carte
              !</strong
            >
          </p>
          <div class="row">
            <div class="col-md-4 col-sm-12">
              <article class="info-box-layout-1" data-aos="zoom-in">
                <h2>Climat</h2>

                <div class="item-box">
                  <div class="checkbox-rect2" data-aos="fade-left">
                    <input type="checkbox" id="tropical" name="check" />
                    <label for="tropical">Climat tropical</label>
                  </div>
                </div>
                <div class="item-box">
                  <div class="checkbox-rect2" data-aos="fade-left">
                    <input type="checkbox" id="equatorial" name="check" />
                    <label for="equatorial">Climat équatorial</label>
                  </div>
                </div>
                <div class="item-box">
                  <div class="checkbox-rect2">
                    <input type="checkbox" id="mont" name="check" />
                    <label for="mont">Climat de montagne</label>
                  </div>
                </div>
              </article>
            </div>
            <!--  end col-sm-6  -->

            <div class="col-md-4 col-sm-12">
              <article class="info-box-layout-1" data-aos="zoom-in">
                <h2>Cultures</h2>
                <div class="item-box">
                  <div class="checkbox-rect2" data-aos="fade-left">
                    <input type="checkbox" id="prod" name="check" />
                    <label for="prod">Production</label>
                  </div>
                </div>
                <div class="item-box">
                  <div class="checkbox-rect2" data-aos="fade-left">
                    <input type="checkbox" id="dist" name="check" />
                    <label for="dist">Distribution</label>
                  </div>
                </div>
                <div class="item-box">
                  <div class="checkbox-rect2" data-aos="fade-left">
                    <input type="checkbox" id="plant" name="check" />
                    <label for="plant">Plantation</label>
                  </div>
                </div>
              </article>
            </div>
            <!--  end col-sm-6  -->

            <div class="col-md-4 col-sm-12">
              <article class="info-box-layout-1" data-aos="zoom-in">
                <h2>Intrants</h2>

                <div class="item-box">
                  <div class="checkbox-rect2" data-aos="fade-left">
                    <input type="checkbox" id="sem" name="check" />
                    <label for="sem">Semence</label>
                  </div>
                </div>
                <div class="item-box">
                  <div class="checkbox-rect2" data-aos="fade-left">
                    <input type="checkbox" id="fert" name="check" />
                    <label for="fert">Fertilisant</label>
                  </div>
                </div>
                <div class="item-box">
                  <div class="checkbox-rect2" data-aos="fade-left">
                    <input type="checkbox" id="pest" name="check" />
                    <label for="pest">Pesticide</label>
                  </div>
                </div>
              </article>
            </div>
            <!--  end col-sm-6  -->
          </div>
          <!-- end row  -->
          <div class="text-center" data-aos="fade-down">
            <button class="btn btn-custom" @click="closeModal" style="width:100%">
              <i class="fa fa-map-pin"></i>
              Cartographier
            </button>
          </div>
        </section>
      </div>
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
  mounted() {
    this.loadModalFunctions();
  },

  methods: {
    emitted() {
      console.log("logged in");
    },

    openModal() {
      document.getElementById("gmodal").classList.add("is-visible");
    },
    closeModal() {
      document
        .querySelector(".gmodal.is-visible")
        .classList.remove("is-visible");
    },

    loadModalFunctions() {
      document.addEventListener("click", (e) => {
        if (e.target == document.querySelector(".modal.is-visible")) {
          document
            .querySelector(".gmodal.is-visible")
            .classList.remove("is-visible");
        }
      });

      document.addEventListener("keyup", (e) => {
        // if we press the ESC
        if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
          document
            .querySelector(".gmodal.is-visible")
            .classList.remove("is-visible");
        }
      });
    },
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