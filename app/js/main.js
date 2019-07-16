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
    const myChart = Highcharts.chart('chart-container-2', {
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
            data: [
                ["$20,000",166575],
                ["$30,000",634350],
                ["$40,000",1101825],
                ["$50,000",1569600],
                ["$60,000",2034900],
                ["$70,000",2502375],
                ["$80,000",3142950],
                ["$90,000",3801225],
                ["$100,000",4457625]
            ],
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
                autoRotation: false,
                useHTML: true,
                overflow: 'allow',
                formatter: function () {
                    return (this.value)/1000000;
                }
            },
            max: 5000000
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