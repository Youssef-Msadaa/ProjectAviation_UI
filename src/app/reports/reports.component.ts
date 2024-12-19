import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
})
export class ReportsComponent implements AfterViewInit {
  ngAfterViewInit() {
    // Initialize the chart after the view has been initialized
    const ctx = document.getElementById(
      'flightStatusChart'
    ) as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['On Time', 'Delayed', 'Cancelled'],
        datasets: [
          {
            data: [430, 50, 20],
            backgroundColor: ['#4caf50', '#ff9800', '#f44336'],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                let label = context.label || '';
                if (context.parsed !== null) {
                  label += ': ' + context.parsed + ' flights';
                }
                return label;
              },
            },
          },
        },
      },
    });
  }
}
