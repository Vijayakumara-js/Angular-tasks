import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.piechart();
  }

  piechart() {
   
      const myChart = new Chart('pieChart', {
          type: "pie",
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
                  },
              ],
          },
          options: {
              plugins: {
                legend: {
                  display: false,
                },
              },
          },
      });
  }

}
