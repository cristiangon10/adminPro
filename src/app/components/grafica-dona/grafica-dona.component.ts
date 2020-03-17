import { Component, OnInit, Input } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styleUrls: ['./grafica-dona.component.css']
})
export class GraficaDonaComponent implements OnInit {

  @Input('data') data: Array<any> = [];
  @Input('labels') labels: Array<any> = [];
  @Input('type') type: ChartType;

  constructor() {     
  }

  doughnutChartLabels: Label[] = [];
  doughnutChartData: MultiDataSet = [];
  doughnutChartType: ChartType = "doughnut";

  ngOnInit() {
    this.abrirGraficas();
  }

  abrirGraficas(){
    this.doughnutChartData = this.data;
    this.doughnutChartLabels = this.labels;
    this.doughnutChartType = this.type;
  }

}
