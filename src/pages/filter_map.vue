<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
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

    <section class="section-content-block">
      <div class="container">
        <div class="row" data-aos="fade-up">
          <div class="col-md-8 col-md-offset-2 col-sm-12 text-center">
            <h2 class="section-heading">Cartographie de données agricoles</h2>
            <p class="section-subheading">
              Veuillez sélectionner des données que vous voulez cartographier !
            </p>
          </div>
          <!-- end .col-sm-10  -->
        </div>
        <!--  end .row  -->

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
                <div class="checkbox-rect2" >
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
          <router-link :to="{ name: 'map' }" class="btn btn-custom">
            <i class="fa fa-map"></i>
            Afficher le resultat cartographié
          </router-link>
        </div>
      </div>
      <!-- end .container  -->
    </section>

    <footer>
      <section class="footer-contents">
        <div class="container">
          <div class="row clearfix">
            <div class="col-md-12 col-sm-12">
              <p class="copyright-text">
                Tous droits reservés © 2022 -
                <a href="http://bluewindlab.net/" target="_blank"
                  >RT GROUP SARL RDC</a
                >
              </p>
            </div>
            <!-- end .col-sm-6  -->
          </div>
        </div>
      </section>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FilterPage",
  data() {
    return {};
  },
};
</script>

<style>
@import url("@/assets/css/style.css");
</style>