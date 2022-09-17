<template>
  <div>
    <!--  HEADER -->
    <!--  HEADER -->

    <header class="main-header clearfix">
      <div class="top-bar">
        <div class="container">
          <div class="row clearfix">
            <div class="col-md-6 col-sm-12">
              <span class="top-email-info">
                <i class="fa fa-hand-rock-o"></i>
                <a href="#">Bienvenue sur le moteur de recherche de SNIA !</a>
              </span>
            </div>
            <!-- end col-sm-6  -->
          </div>
          <!-- end .row  -->
        </div>
        <!--  end .container -->
      </div>
    </header>
    <!-- end main-header  -->

    <div class="jumbotron-wrap">
      <div id="jumbotron_1">
        <div class="item">
          <img src="assets/images/agro-4.jpg" data-aos="fade" alt="img" />
          <div class="jumbotron-content">
            <div class="container">
              <h2 data-aos="fade-up">SNIA</h2>
              <h3 data-aos="fade-left">
                Tout ce que vous voulez savoir <br />
                à propos des activités agricoles de la Rép. Dém. du Congo !
              </h3>

              <div
                class="col-md-8 col-md-offset-2 col-sm-12 search-form-container"
              >
                <form
                  id="form"
                  action="#"
                  autocomplete="off"
                  class="bkb-live-search-form"
                  @submit.prevent="submitted"
                >
                  <div id="suggest" class="bkb_filter_container">
                    <input
                      data-aos="zoom-in"
                      size="25"
                      value=""
                      id="s"
                      name="s"
                      class="s search_icon"
                      placeholder="Entrez le mot de recherche ..... "
                      data-search-box-unique-id="2455185277"
                      type="text"
                    />

                    <a
                      data-aos="fade-right"
                      href="#ask_question"
                      class="btn btn-jumbotron nav_menu hidden-xs"
                      >Culture</a
                    >
                    <a
                      data-aos="fade-right"
                      href="#ask_question"
                      class="btn btn-jumbotron nav_menu hidden-xs"
                      >Semence</a
                    >
                    <a
                      data-aos="fade-left"
                      href="#ask_question"
                      class="btn btn-jumbotron nav_menu hidden-xs"
                      >Fertilisant</a
                    >
                    <a
                      data-aos="fade-left"
                      href="#ask_question"
                      class="btn btn-jumbotron nav_menu hidden-xs"
                      >Maladies</a
                    >
                  </div>
                  <!-- end .bkb_filter_container -->
                </form>
              </div>
            </div>
            <!-- /.jumbotron-content -->
          </div>
        </div>
      </div>
    </div>

    <!--  Knowledge Base Feature Block -->

    <!-- FOOTER  -->

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

    <!-- Back To Top Button  -->
  </div>
</template>

<script>
export default {
  name: "homePage",

  methods: {
    submitted() {
      this.$router.push({ name: "Results" });
    },
  },
};
</script>