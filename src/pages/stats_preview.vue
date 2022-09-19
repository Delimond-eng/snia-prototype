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
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2 col-sm-12 text-center">
          <h2 class="section-heading">Statistiques agricoles</h2>
          <p class="section-subheading">
            Il s'agit des statistiques des productions agricoles !
          </p>
        </div>
        <!-- end .col-sm-10  -->
      </div>
      <!--  end .row  -->
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <apexchart
              type="bar"
              height="350"
              :options="chartOptions1"
              :series="series1"
            ></apexchart>
          </div>
          <div class="col-md-6">
            <apexchart
              type="pie"
              width="500"
              :options="chartOptions2"
              :series="series2"
            ></apexchart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatsPage",
  data() {
    return {
      series1: [
        {
          name: "Actual",
          data: [
            {
              x: "2015",
              y: 1292,
              goals: [
                {
                  name: "Expected",
                  value: 1400,
                  strokeHeight: 5,
                  strokeColor: "#775DD0",
                },
              ],
            },
            {
              x: "2016",
              y: 4432,
              goals: [
                {
                  name: "Expected",
                  value: 5400,
                  strokeHeight: 5,
                  strokeColor: "#775DD0",
                },
              ],
            },
            {
              x: "2017",
              y: 5423,
              goals: [
                {
                  name: "Expected",
                  value: 5200,
                  strokeHeight: 5,
                  strokeColor: "#775DD0",
                },
              ],
            },
            {
              x: "2018",
              y: 6653,
              goals: [
                {
                  name: "Expected",
                  value: 6500,
                  strokeHeight: 5,
                  strokeColor: "#775DD0",
                },
              ],
            },
            {
              x: "2019",
              y: 8133,
              goals: [
                {
                  name: "Expected",
                  value: 6600,
                  strokeHeight: 13,
                  strokeWidth: 0,
                  strokeLineCap: "round",
                  strokeColor: "#775DD0",
                },
              ],
            },
            {
              x: "2020",
              y: 7132,
              goals: [
                {
                  name: "Expected",
                  value: 7500,
                  strokeHeight: 5,
                  strokeColor: "#775DD0",
                },
              ],
            },
            {
              x: "2021",
              y: 7332,
              goals: [
                {
                  name: "Expected",
                  value: 8700,
                  strokeHeight: 5,
                  strokeColor: "#775DD0",
                },
              ],
            },
            {
              x: "2022",
              y: 6553,
              goals: [
                {
                  name: "Expected",
                  value: 7300,
                  strokeHeight: 2,
                  strokeDashArray: 2,
                  strokeColor: "#775DD0",
                },
              ],
            },
          ],
        },
      ],
      chartOptions1: {
        chart: {
          height: 350,
          type: "bar",
        },
        plotOptions: {
          bar: {
            columnWidth: "60%",
          },
        },
        colors: ["#00E396"],
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: true,
          showForSingleSeries: true,
          customLegendItems: ["Actual", "Expected"],
          markers: {
            fillColors: ["#00E396", "#775DD0"],
          },
        },
      },
      series2: [44, 55, 13, 43, 22],
      chartOptions2: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: ["Production", "Semence", "Agriculteur", "Distribution", "Fertilisant"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  },
};
</script>