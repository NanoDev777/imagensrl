<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm12 md12>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h1 class="title mb-0">Gráfico general de alquileres</h1>
              <span class="caption mb-0">Detalla la cantidad de alquileres por ciudad que usted ha realizado, tanto de los alquileres que están activos cómo de los que ya se vencieron.</span>
            </div>
          </v-card-title>
          <div class="chart" ref="chartdiv"></div>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm12 md12>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h1 class="title mb-0">Gráfico de alquileres activos</h1>
              <span class="caption mb-0">Muestra los alquileres activos actualmente por ciudad.</span>
            </div>
          </v-card-title>
          <div class="chart" ref="piediv"></div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import * as am4core from "@amcharts/amcharts4/core";
  import * as am4charts from "@amcharts/amcharts4/charts";
  import am4themes_animated from "@amcharts/amcharts4/themes/animated";

  am4core.useTheme(am4themes_animated);

  export default {
    data() {
      return {
        loading: false,
        total: [],
        rented: []
      }
    },

    mounted() {
      Promise.all([this.getTotalRented(), this.getRentedActive()]);
    },

    methods: {
      getTotalRented() {
        return new Promise((resolved, reject) => {
          axios.get(`/api/total-rented`)
          .then((response) => { 
            this.total = response.data;
            let chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart3D);
            chart.data = this.total;

            let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
            categoryAxis.dataFields.category = "city";
            categoryAxis.renderer.labels.template.rotation = 270;
            categoryAxis.renderer.labels.template.hideOversized = false;
            categoryAxis.renderer.minGridDistance = 20;
            categoryAxis.renderer.labels.template.horizontalCenter = "right";
            categoryAxis.renderer.labels.template.verticalCenter = "middle";
            categoryAxis.tooltip.label.rotation = 270;
            categoryAxis.tooltip.label.horizontalCenter = "right";
            categoryAxis.tooltip.label.verticalCenter = "middle";

            let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.title.text = "Ciudades";
            valueAxis.title.fontWeight = "bold";

            let series = chart.series.push(new am4charts.ColumnSeries3D());
            series.dataFields.valueY = "total";
            series.dataFields.categoryX = "city";
            series.name = "Visits";
            series.tooltipText = "{categoryX}: [bold]{valueY}[/]";
            series.columns.template.fillOpacity = .8;

            let columnTemplate = series.columns.template;
            columnTemplate.strokeWidth = 2;
            columnTemplate.strokeOpacity = 1;
            columnTemplate.stroke = am4core.color("#FFFFFF");

            columnTemplate.adapter.add("fill", (fill, target) => {
              return chart.colors.getIndex(target.dataItem.index);
            })

            columnTemplate.adapter.add("stroke", (stroke, target) => {
              return chart.colors.getIndex(target.dataItem.index);
            })

            chart.cursor = new am4charts.XYCursor();
            chart.cursor.lineX.strokeOpacity = 0;
            chart.cursor.lineY.strokeOpacity = 0;
          })
        })
      },

      getRentedActive() {
        return  new Promise((resolved, reject) => {
          axios.get(`/api/rented-active`)
          .then((response) => { 
            this.rented = response.data;
            let chart = am4core.create(this.$refs.piediv, am4charts.PieChart);

            chart.legend = new am4charts.Legend();

            chart.data = this.rented;

            let pieSeries = chart.series.push(new am4charts.PieSeries());
            pieSeries.dataFields.value = "total";
            pieSeries.dataFields.category = "city";
            pieSeries.innerRadius = am4core.percent(50);
            pieSeries.ticks.template.disabled = true;
            pieSeries.labels.template.disabled = true;

            let rgm = new am4core.RadialGradientModifier();
            rgm.brightnesses.push(-0.5, -0.5, -0.3, 0, - 0.3);
            pieSeries.slices.template.fillModifier = rgm;
            pieSeries.slices.template.strokeModifier = rgm;
            pieSeries.slices.template.strokeOpacity = 0.4;
            pieSeries.slices.template.strokeWidth = 0;

            chart.legend = new am4charts.Legend();
          })
        })
      }
    },

    beforeDestroy() {
      if (this.chart) {
        this.chart.dispose();
      }
    }
  }
</script>

<style scoped>
  .chart {
    width: 100%;
    height: 500px;
  }
</style>
