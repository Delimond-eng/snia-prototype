<template>
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
          <button
            class="btn btn-custom"
            @click.prevent="reload()"
            style="width: 100%"
          >
            <i class="fa fa-map-pin"></i>
            Cartographier
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>

export default {
  name: "GModal",

  methods: {
    closeModal() {
      document
        .querySelector(".gmodal.is-visible")
        .classList.remove("is-visible");
    },

    reload(){
        this.closeModal();
        this.$emit('onPressed');
    }
  },
};
</script>