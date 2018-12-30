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
          <div class="hello" ref="chartdiv"></div>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm6 md6>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h1 class="title mb-0">Gráfico de alquileres activos</h1>
              <span class="caption mb-0">Muestra los alquileres activos actualmente por ciudad.</span>
            </div>
          </v-card-title>
          <div class="hello" ref="piediv"></div>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md6>
        <v-card>
          <v-card-title primary-title>
            <h1 class="title mb-0">Gráficas 3</h1>
          </v-card-title>
          <div class="hello" ref="radardiv"></div>
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
      Promise.all([this.getColumn(), this.getPie()])
      this.getRadar();
    },

    methods: {
      getColumn() {
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

      getPie() {
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
      },

      getRadar() {
        let chart = am4core.create(this.$refs.radardiv, am4charts.XYChart);

        chart.data = [{
          "year": "2016",
          "europe": 2.5,
          "namerica": 2.5,
          "asia": 2.1,
          "lamerica": 0.3,
          "meast": 0.2,
          "africa": 0.1
        }, {
          "year": "2017",
          "europe": 2.6,
          "namerica": 2.7,
          "asia": 2.2,
          "lamerica": 0.3,
          "meast": 0.3,
          "africa": 0.1
        }, {
          "year": "2018",
          "europe": 2.8,
          "namerica": 2.9,
          "asia": 2.4,
          "lamerica": 0.3,
          "meast": 0.3,
          "africa": 0.1
        }];

        chart.legend = new am4charts.Legend();
        chart.legend.position = "right";

        // Create axes
        let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "year";
        categoryAxis.renderer.grid.template.opacity = 0;

        let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
        valueAxis.min = 0;
        valueAxis.renderer.grid.template.opacity = 0;
        valueAxis.renderer.ticks.template.strokeOpacity = 0.5;
        valueAxis.renderer.ticks.template.stroke = am4core.color("#495C43");
        valueAxis.renderer.ticks.template.length = 10;
        valueAxis.renderer.line.strokeOpacity = 0.5;
        valueAxis.renderer.baseGrid.disabled = true;
        valueAxis.renderer.minGridDistance = 40;

        // Create series
        function createSeries(field, name) {
          let series = chart.series.push(new am4charts.ColumnSeries());
          series.dataFields.valueX = field;
          series.dataFields.categoryY = "year";
          series.stacked = true;
          series.name = name;
          
          let labelBullet = series.bullets.push(new am4charts.LabelBullet());
          labelBullet.locationX = 0.5;
          labelBullet.label.text = "{valueX}";
          labelBullet.label.fill = am4core.color("#fff");
        }

        createSeries("europe", "Europe");
        createSeries("namerica", "North America");
        createSeries("asia", "Asia");
        createSeries("lamerica", "Latin America");
        createSeries("meast", "Middle East");
        createSeries("africa", "Africa");
      }
    },

    beforeDestroy() {
      if (this.chart) {
        this.chart.dispose();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 100%;
  height: 500px;
}
</style>
