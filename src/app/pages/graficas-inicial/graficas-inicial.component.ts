import { Component, OnInit } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';


@Component({
  selector: 'app-graficas-inicial',
  templateUrl: './graficas-inicial.component.html',
  styles: []
})
export class GraficasInicialComponent implements OnInit {

  graficos: any = [
    {
      'nombre': 'grafico1',
      'labels': ['Con Frijoles', 'Con Natilla', 'Con tocino'],
      'data': [24, 30, 46],
      'type': 'doughnut',
      'leyenda': 'El pan se come con'
    },
    {
      'nombre': 'grafico2',
      'labels': ['Hombres', 'Mujeres'],
      'data': [4500, 6000],
      'type': 'doughnut',
      'leyenda': 'Entrevistados'
    },
    {
      'nombre': 'grafico3',
      'labels': ['Si', 'No'],
      'data': [95, 5],
      'type': 'doughnut',
      'leyenda': '¿Le dan gases los frijoles?'
    },
    {
      'nombre': 'grafico4',
      'labels': ['No', 'Si'],
      'data': [85, 15],
      'type': 'doughnut',
      'leyenda': '¿Le importa que le den gases?'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
