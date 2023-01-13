import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
/*     setTimeout(() => {
      this.barchart();
      alert('chart')
    }, 2000); */
    debugger;
    this.barchart();
  }

  barchart() {
    debugger;
  
      const myChart = new Chart('barChart1', {
          type: "bar",
          data: {
              labels: ["Total Project", "Ongoing Project", "Pending Project", "Completed"],
              datasets: [
                  {
                      data: [12, 19, 3, 5],
                      backgroundColor: [
                        "#ffc000",
                        "#4472c4",
                        "#ed7d31",
                        "#939393",
                      ],
                      borderColor: [
                        "#ffc000",
                        "#4472c4",
                        "#ed7d31",
                        "#939393",
                      ],
                      borderWidth: 1,
                      barPercentage:0.4
                  },
              ],
          },
          options: {
              scales: {
                x: {
                  beginAtZero: true,
                  grid: {
                    display: false
                  },
                  title: {
                    display: true,
                    text: 'Projects'
                  }
                },
                y: {
                  beginAtZero: true,
                  grid:{
                    display:true
                  },
                  title: {
                    display: true,
                    text: 'Count'
                  }
                },
              },
              plugins: {
                legend: {
                  display: false,
                },
              },
          },
      });
  
  }

}
