<template>
  <div style="padding: 0; margin: 0">
    <!--  HEADER -->

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
              >
                SNIA</router-link
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
    <!--  MAIN CONTENT  -->
    <section class="main-content" style="margin-top: 2em">
      <div class="container">
        <div
          class="row"
          style="display: flex; align-items: center; justify-content: center"
        >
          <div class="col-sm-10">
            <div class="widget site-sidebar">
              <form
                id="search-form"
                class="search-form"
                role="form"
                method="get"
              >
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Recherche...."
                  />
                  <span class="input-group-addon"
                    ><i class="fa fa-search"></i
                  ></span>
                </div>
              </form>
              <div class="filter">
                <a
                  data-aos="fade-right"
                  href="#"
                  class="btn btn-filter nav_menu hidden-xs"
                  >Tous</a
                >
                <router-link
                  :to="{ name: 'map' }"
                  data-aos="fade-right"
                  href="#"
                  class="btn btn-filter nav_menu hidden-xs"
                  >Cartographies</router-link
                >
                <router-link
                  :to="{ name: 'stats' }"
                  data-aos="fade-left"
                  href="#"
                  class="btn btn-filter nav_menu hidden-xs"
                  >Statistiques</router-link
                >
              </div>
              <!-- end .bkb_filter_container -->
              <!-- end #search-form  -->
            </div>
            <div class="bbpress-forums">
              <div class="bbp-template-notice info" data-aos="zoom-in">
                <p class="bbp-topic-description">
                  Environ 35 résultats (0,51 secondes)
                </p>
              </div>
            </div>
            <!--Popular articles view-->
            <fieldset
              data-aos="zoom-in"
              v-for="(item, index) in details"
              :key="index"
            >
              <legend>{{ item.title }}</legend>
              <div class="single-recent-post" data-aos="fade-up">
                <img alt="" class="single-post-thumb" :src="item.imgPath" />
                <a href="#">
                  <span>{{ item.subtitle }}</span>
                  {{ item.desc }}
                </a>
              </div>
            </fieldset>
            <!--End Popular-->

            <div class="blog-pagination text-center clearfix">
              <ul class="pagination" data-aos="fade-up">
                <li>
                  <a href="#" class="prev page-numbers"
                    ><i class="fa fa-caret-left"></i
                  ></a>
                </li>
                <li><a href="#" class="page-numbers">1</a></li>
                <li><a href="#" class="page-numbers current">2</a></li>
                <li><a href="#" class="page-numbers">3</a></li>
                <li>
                  <a href="#" class="next page-numbers"
                    ><i class="fa fa-caret-right"></i
                  ></a>
                </li>
              </ul>
              <!-- end pagination  -->
            </div>
            <!--  end blog-pagination -->
          </div>
          <!--  end col-sm-8 -->
        </div>
        <!--  end row  -->
      </div>
      <!--  end container -->
    </section>
    <!-- end .main-content  -->

    <!-- FOOTER  -->

    <footer>
      <!--FOOTER CONTENT  -->

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
    <!-- Back To Top Button  -->
  </div>
</template>

<script>
export default {
  name: "DetailsPage",
  data() {
    return {
      id: "",
      details: [
        {
          title: "Culture",
          imgPath: "assets/images/img_0.jpg",
          subtitle: "Production de maïs",
          desc: "En 2016, la production céréalière brute nationale (maïs et riz) était estimée à 4 397 184 tonnes, dont 3 373 058 tonnes de maïs. En 2015, la production brute nationale était estimée à 5 333 738 tonnes. Elle a baissé de 18% ...",
        },
        {
          title: "Semence",
          imgPath: "assets/images/img_1.jpg",
          subtitle: "La production des semences",
          desc: "En tant qu’agriculteur ou agricultrice, il peut parfois être tentant de réutiliser ses semences dans le but d’économiser sur les coûts de production ou d’être davantage autosuffisant. Cette pratique peut être avantageuse lorsque...",
        },
        {
          title: "Fertilisant",
          imgPath: "assets/images/img_2.jpg",
          subtitle: "Meilleures techniques de la fertilisations du sol",
          desc: "La fertilisation permet d’apporter au sol tous les éléments dont les plantes auront besoin durant leur croissance. Cette technique peut être complétée, pour certaines plantes, par des apports d’engrais organiques à la floraison...",
        },
        {
          title: "Maladies",
          imgPath: "assets/images/img_3.jpg",
          subtitle: "Maladies des plantes & conseils",
          desc: "Il existe de ce fait, deux types de maladies des plantes, à savoir: des maladies non infectieuses (abiotiques); et des maladies infectieuses (biotiques) causées par des champignons, des bactéries, des plantes supérieures parasites...",
        },
      ],
    };
  },
  computed: {
    getId(id) {
      return id;
    },
  },
};
</script>