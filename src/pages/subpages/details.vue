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
    <!--  MAIN CONTENT  -->
    <section class="main-content" style="margin-top: 2em">
      <div class="container">
        <div class="row">
          <div class="col-sm-8">
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

                <input type="hidden" value="submit" />
              </form>
              <!-- end #search-form  -->
            </div>

            <div class="bbpress-forums">
              <div class="bbp-template-notice info" data-aos="zoom-in">
                <p class="bbp-topic-description">
                  <a href="#" title="View Xenioushk Rocks's profile">(100)</a>
                  Resultats
                </p>
              </div>
            </div>

            <!--Popular articles view-->
            <div
              class="single-recent-post"
              data-aos="fade-up"
              v-for="i in 10"
              :key="i"
            >
              <img
                alt=""
                data-aos="zoom-in"
                class="single-post-thumb"
                src="assets/images/news_2.jpg"
              />

              <a href="#">
                <span>consectetur recusandae dignissimos.</span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
                vero minima quae eveniet asperiores quaerat, nihil consequatur.
                Mollitia nulla rerum ex nemo! Delectus et, consectetur
                recusandae dignissimos culpa excepturi incidunt.
              </a>
              
            </div>
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

          <div class="col-sm-4">
            <div class="widget site-sidebar">
              <h2 class="widget-title" data-aos="fade-right">Catégories</h2>

              <ul class="widget-post-category clearfix" data-aos="fade-up">
                <li>
                  <a title="View all posts filed under Environment" href="#"
                    >Culture</a
                  >
                  <span class="pull-right badge">42</span>
                </li>
                <li>
                  <a title="View all posts filed under Technology" href="#"
                    >Semence</a
                  >
                  <span class="pull-right badge">40</span>
                </li>
                <li>
                  <a title="View all posts filed under Health" href="#"
                    >Fertilisant</a
                  >
                  <span class="pull-right badge">32</span>
                </li>
                <li>
                  <a title="View all posts filed under Disaster" href="#"
                    >Maladie</a
                  >
                  <span class="pull-right badge">26</span>
                </li>
              </ul>
            </div>
            <!--  end .widget -->

            <div class="widget site-sidebar">
              <h2 class="widget-title" data-aos="fade-right">
                Resultats similaires
              </h2>
              <div
                class="single-recent-post"
                data-aos="fade-up"
                v-for="i in 5"
                :key="i"
              >
                <img
                  alt=""
                  class="single-post-thumb"
                  src="assets/images/news_1.jpg"
                  data-aos="zoom-in"
                />
                <a href="#" style="font-weight: 800"
                  >Incidunt impedit facilis atque aperiam!
                </a>
                
              </div>
            </div>
            <!--  end .widget -->
            <div class="widget site-sidebar">
              <h2 class="widget-title" data-aos="fade-left">Autres indices</h2>

              <ul class="widget-recent-tags clearfix">
                <li data-aos="zoom-in">
                  <a href="#" title=""> Climat</a>
                </li>

                <li data-aos="zoom-in">
                  <a href="#" title=""> Matériels & technologie</a>
                </li>

                <li data-aos="zoom-in">
                  <a href="#" title=""> Sol</a>
                </li>

                <li data-aos="zoom-in">
                  <a href="#" title=""> Encadrement</a>
                </li>

                <li data-aos="zoom-in">
                  <a href="#" title=""> Projets</a>
                </li>
              </ul>
              <!--  end .widget-recent-tags -->
            </div>
            <!--  end .widget -->
          </div>
          <!-- end .col-sm-4  -->
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
};
</script>