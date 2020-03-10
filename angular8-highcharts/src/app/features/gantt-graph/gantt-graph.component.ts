import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts/highcharts-gantt";

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

export interface Car {
  start: Date;
  end: Date;
  color: string;
  name: string;
}

@Component({
  selector: 'app-gantt-graph',
  templateUrl: './gantt-graph.component.html',
  styleUrls: ['./gantt-graph.component.css']
})
export class GanttGraphComponent implements OnInit {
  cars: Car[] =
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
      grid: {
        borderWidth: 0
      },
      uniqueNames: true
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
      min: Date.UTC(2000, 0,0),
      max: Date.UTC(2030, 12,31)
    },{
      grid: {
        enabled: false
      },
      labels: {
        format: '{value:%Y}'
      },
      opposite: false,
      tickInterval: 1000 * 60 * 60 * 24 * 365, // Year
      min: Date.UTC(2000, 0,0),
      max: Date.UTC(2030, 12,31)
    }],
    series: [{
      type: 'gantt',
      borderColor: "black",
      data: [{
        start: Date.UTC(2000, 0, 1),
        end: Date.UTC(2001, 0, 1),
        color: 'orange',
        name: 'Car 1'
      }, {
        start: Date.UTC(2001, 0, 1),
        end: Date.UTC(2003, 0, 1),
        color: 'red',
        name: 'Car 1'
      }, {
        start: Date.UTC(2003, 0, 1),
        end: Date.UTC(2006, 0, 1),
        color: 'white',
        name: 'Car 1'
      }, {
        start: Date.UTC(2006, 0, 1),
        end: Date.UTC(2016, 0, 1),
        color: 'orange',
        name: 'Car 1'
      }, {
        start: Date.UTC(2016, 0, 1),
        end: Date.UTC(2017, 0, 1),
        color: 'green',
        name: 'Car 1'
      }, {
        start: Date.UTC(2017, 0, 1),
        end: Date.UTC(2020, 0, 1),
        color: 'white',
        name: 'Car 1'
      },
        {
          start: Date.UTC(2000, 0, 1),
          end: Date.UTC(2005, 0, 1),
          color: 'orange',
          name: 'Car 2'
        }, {
          start: Date.UTC(2005, 0, 1),
          end: Date.UTC(2006, 0, 1),
          color: 'red',
          name: 'Car 2'
        }, {
          start: Date.UTC(2006, 0, 1),
          end: Date.UTC(2007, 0, 1),
          color: 'white',
          name: 'Car 2'
        }, {
          start: Date.UTC(2007, 0, 1),
          end: Date.UTC(2010, 0, 1),
          color: 'orange',
          name: 'Car 2'
        }, {
          start: Date.UTC(2010, 0, 1),
          end: Date.UTC(2011, 0, 1),
          color: 'green',
          name: 'Car 2'
        }, {
          start: Date.UTC(2011, 0, 1),
          end: Date.UTC(2015, 0, 1),
          color: 'white',
          name: 'Car 2'
        },
        {
          start: Date.UTC(2000, 0, 1),
          end: Date.UTC(2003, 0, 1),
          color: 'orange',
          name: 'Car 3'
        }, {
          start: Date.UTC(2003, 0, 1),
          end: Date.UTC(2004, 0, 1),
          color: 'red',
          name: 'Car 3'
        }, {
          start: Date.UTC(2004, 0, 1),
          end: Date.UTC(2016, 0, 1),
          color: 'white',
          name: 'Car 3'
        }, {
          start: Date.UTC(2016, 0, 1),
          end: Date.UTC(2018, 0, 1),
          color: 'orange',
          name: 'Car 3'
        }, {
          start: Date.UTC(2018, 0, 1),
          end: Date.UTC(2020, 0, 1),
          color: 'green',
          name: 'Car 3'
        }, {
          start: Date.UTC(2020, 0, 1),
          end: Date.UTC(2025, 0, 1),
          color: 'white',
          name: 'Car 3'
        },
        {
          start: Date.UTC(2000, 0, 1),
          end: Date.UTC(2006, 0, 1),
          color: 'orange',
          name: 'Car 4'
        }, {
          start: Date.UTC(2006, 0, 1),
          end: Date.UTC(2007, 0, 1),
          color: 'red',
          name: 'Car 4'
        }, {
          start: Date.UTC(2007, 0, 1),
          end: Date.UTC(2009, 0, 1),
          color: 'white',
          name: 'Car 4'
        }, {
          start: Date.UTC(2000, 0, 1),
          end: Date.UTC(2004, 0, 1),
          color: 'orange',
          name: 'Car 5'
        }, {
          start: Date.UTC(2004, 0, 1),
          end: Date.UTC(2005, 0, 1),
          color: 'red',
          name: 'Car 5'
        }, {
          start: Date.UTC(2005, 0, 1),
          end: Date.UTC(2007, 0, 1),
          color: 'white',
          name: 'Car 5'
        }, {
          start: Date.UTC(2007, 0, 1),
          end: Date.UTC(2010, 0, 1),
          color: 'green',
          name: 'Car 5'
        }]
    }]
  }

  constructor() { }

  ngOnInit() {
    Highcharts.ganttChart('container', this.options);
  }

}
