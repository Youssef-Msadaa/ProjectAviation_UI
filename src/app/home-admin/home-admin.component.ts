import { Component } from '@angular/core';
import { Chart, registerables, ChartConfiguration } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css'],
})
export class HomeAdminComponent {
  ngOnInit(): void {
    // Updated colors for charts
    const professionalColors = {
      green: '#1D8348',
      blue: '#2874A6',
      yellow: '#F1C40F',
      red: '#CB4335',
      teal: '#17A589',
      orange: '#E67E22',
    };

    // Bar chart: Number of reservations per flight
    const reservationsBarChartConfig: ChartConfiguration<
      'bar',
      number[],
      string
    > = {
      type: 'bar',
      data: {
        labels: ['Flight A', 'Flight B', 'Flight C', 'Flight D', 'Flight E'],
        datasets: [
          {
            label: 'Number of Reservations',
            data: [150, 200, 100, 250, 300],
            backgroundColor: professionalColors.green,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true },
        },
        plugins: {
          legend: { position: 'top' },
        },
      },
    };
    new Chart('ReservationsBarChart', reservationsBarChartConfig);

    // Line chart: Flight trends over time (monthly)
    const flightTrendLineChartConfig: ChartConfiguration<
      'line',
      number[],
      string
    > = {
      type: 'line',
      data: {
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY'],
        datasets: [
          {
            label: 'Flight A Reservations',
            data: [100, 150, 200, 250, 300],
            borderColor: professionalColors.red,
            fill: false,
          },
          {
            label: 'Flight B Reservations',
            data: [50, 80, 120, 160, 200],
            borderColor: professionalColors.teal,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true },
        },
        plugins: {
          legend: { position: 'top' },
        },
      },
    };
    new Chart('FlightTrendLineChart', flightTrendLineChartConfig);

    // Pie chart: Flight distribution across airports
    const airportFlightDistributionPieChartConfig: ChartConfiguration<
      'pie',
      number[],
      string
    > = {
      type: 'pie',
      data: {
        labels: [
          'Airport Tunis Carthage',
          'Airport Enfidha',
          'Airport Monastir',
          'Airport Djerba-Zarzis',
        ],
        datasets: [
          {
            data: [45, 25, 15, 15],
            backgroundColor: [
              professionalColors.blue,
              professionalColors.green,
              professionalColors.orange,
              professionalColors.yellow,
            ],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
        },
      },
    };
    new Chart(
      'AirportFlightDistributionPieChart',
      airportFlightDistributionPieChartConfig
    );

    // Chart 4: Passenger age distribution (Histogram)
    const passengerAgeDistributionChartConfig: ChartConfiguration<
      'bar',
      number[],
      string
    > = {
      type: 'bar',
      data: {
        labels: ['0-18', '19-30', '31-50', '51+'],
        datasets: [
          {
            label: 'Passenger Age Groups',
            data: [80, 120, 200, 60],
            backgroundColor: [
              professionalColors.green,
              professionalColors.blue,
              professionalColors.orange,
              professionalColors.red,
            ],
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true },
        },
        plugins: {
          legend: { position: 'top' },
        },
      },
    };
    new Chart(
      'PassengerAgeDistributionChart',
      passengerAgeDistributionChartConfig
    );

    // Chart 5: Revenue comparison between flights
    const revenueComparisonChartConfig: ChartConfiguration<
      'doughnut',
      number[],
      string
    > = {
      type: 'doughnut',
      data: {
        labels: ['Flight A', 'Flight B', 'Flight C', 'Flight D'],
        datasets: [
          {
            data: [5000, 3000, 4000, 7000],
            backgroundColor: [
              professionalColors.red,
              professionalColors.teal,
              professionalColors.green,
              professionalColors.blue,
            ],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
        },
      },
    };
    new Chart('RevenueComparisonChart', revenueComparisonChartConfig);

    // Chart 6: Flight delay trends (Scatter plot)
    const flightDelayTrendsChartConfig: ChartConfiguration<
      'scatter',
      { x: number; y: number }[],
      string
    > = {
      type: 'scatter',
      data: {
        datasets: [
          {
            label: 'Flight Delays (in minutes)',
            data: [
              { x: 1, y: 15 },
              { x: 2, y: 30 },
              { x: 3, y: 45 },
              { x: 4, y: 20 },
              { x: 5, y: 60 },
            ],
            backgroundColor: professionalColors.yellow,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Flight Number',
            },
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Delay (minutes)',
            },
          },
        },
        plugins: {
          legend: { position: 'top' },
        },
      },
    };
    new Chart('FlightDelayTrendsChart', flightDelayTrendsChartConfig);
  }
}
