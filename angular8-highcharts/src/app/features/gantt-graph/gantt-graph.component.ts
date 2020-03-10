import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts/highcharts-gantt";
// @ts-ignore
import data from '../../../assets/cars.json';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

export class Car {
  start: number;
  end: number;
  color: string;
  name: string;
}

function generateFakeData() {
  let cars: Car[] = [];

  for (let i = 0; i < 50; i++) {
    const car1: Car = new Car();
    car1.start = 946684800000;
    car1.end = 978307200000;
    car1.color = 'orange';
    car1.name = 'Car ' + i;

    const car2: Car = new Car();
    car2.start = 978307200000;
    car2.end = 1041379200000;
    car2.color = 'red';
    car2.name = 'Car ' + i;

    const car3: Car = new Car();
    car3.start = 1041379200000;
    car3.end = 1136073600000;
    car3.color = 'white';
    car3.name = 'Car ' + i;

    const car4: Car = new Car();
    car4.start = 1136073600000;
    car4.end = 1451606400000;
    car4.color = 'orange';
    car4.name = 'Car ' + i;

    const car5: Car = new Car();
    car5.start = 1451606400000;
    car5.end = 1483228800000;
    car5.color = 'green';
    car5.name = 'Car ' + i;

    const car6: Car = new Car();
    car6.start = 1483228800000;
    car6.end = 1577836800000;
    car6.color = 'white';
    car6.name = 'Car ' + i;

    cars.push(car1);
    cars.push(car2);
    cars.push(car3);
    cars.push(car4);
    cars.push(car5);
    cars.push(car6);
  }

  console.log('object: %O', cars);

  return cars;
}

@Component({
  selector: 'app-gantt-graph',
  templateUrl: './gantt-graph.component.html',
  styleUrls: ['./gantt-graph.component.css']
})
export class GanttGraphComponent implements OnInit {
  cars: Car[] = generateFakeData();

  public options: any = {
    chart:{
      type: 'gantt',
      height: 700
    },
    title: {
      text: "Gantt Chart"
    },
    credits: {
      text: 'SonnyBoy3428'
    },
    yAxis: {
      title: {
        text: 'Cars'
      },
      grid: {
        borderWidth: 0
      },
      lables: {
        align: 'left'
      },
      uniqueNames: true,
      scrollbar: {
        enabled: true,
        showFull: false
      },
      max: 50
    },
    xAxis: [{
      grid: {
        enabled: false
      },
      labels: {
        format: '{value:%Y}'
      },
      opposite: true,
      tickInterval: 1000 * 60 * 60 * 24 * 365, // Year
      min: Date.UTC(2000, 0, 0),
      max: Date.UTC(2030, 12, 31)
    },{
      grid: {
        enabled: false
      },
      labels: {
        format: '{value:%Y}'
      },
      opposite: false,
      tickInterval: 1000 * 60 * 60 * 24 * 365, // Year
      min: Date.UTC(2000, 0, 0),
      max: Date.UTC(2030, 12, 31)
    }],
    series: [{
      type: 'gantt',
      borderColor: 'black',
      turboThreshold: 7000,
      data: this.cars
    }]
  }

  constructor() { }

  ngOnInit() {
    Highcharts.ganttChart('container', this.options);
  }

}
