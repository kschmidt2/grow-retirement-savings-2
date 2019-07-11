"use strict";

// import Highcharts from 'highcharts';
// import Exporting from 'highcharts/modules/exporting';
// Exporting(Highcharts);
// console.log(Highcharts);
Highcharts.setOptions({
  lang: {
    thousandsSep: ','
  }
});
document.addEventListener('DOMContentLoaded', function () {
  var myChart = Highcharts.chart('chart-container', {
    chart: {
      type: 'bar',
      styledMode: true,
      spacingBottom: 25,
      spacingRight: 100
    },
    title: {
      text: null
    },
    series: [{
      data: [["$30,000", 252600], ["$40,000", 387900], ["$50,000", 523500], ["$60,000", 659100], ["$70,000", 794700], ["$80,000", 930300], ["$90,000", 1065600], ["$100,000", 1204800], ["$150,000", 2024400], ["$200,000", 2896500]]
    }],
    plotOptions: {
      series: {
        groupPadding: .1
      }
    },
    legend: {
      enabled: false
    },
    xAxis: {
      labels: {
        style: {
          whiteSpace: 'nowrap'
        }
      },
      type: 'category'
    },
    yAxis: {
      title: false,
      labels: {
        useHTML: true,
        overflow: 'allow',
        formatter: function formatter() {
          return this.value / 1000000;
        }
      },
      max: 3000000
    },
    credits: {
      enabled: false
    },
    tooltip: {
      shadow: false,
      padding: 10,
      pointFormat: '<b>Savings needed:</b> ${point.y}<br>'
    },
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          chart: {
            spacingRight: 10
          },
          legend: {
            align: 'left',
            x: -18
          },
          tooltip: {
            enabled: false
          }
        }
      }]
    }
  });
});