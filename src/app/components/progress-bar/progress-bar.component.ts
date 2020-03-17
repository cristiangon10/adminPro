import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styles: []
})
export class ProgressBarComponent implements OnInit {

  @Input('valor') porcentaje:number = 50;
  @Input() color:string = 'bg-primary'

  constructor() { }

  ngOnInit() {
  }

}
