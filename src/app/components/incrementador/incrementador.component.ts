import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('input') inputSelected: ElementRef;
  @Input() porcentaje: number = 50;
  @Input('title') title: string = null;
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  cambiarValor(valor) {
    if (this.porcentaje >= 0 && this.porcentaje <= 100) {
      if (valor > 0 && this.porcentaje < 100) {
        this.asignarValor(valor);
      }

      if (valor < 0 && this.porcentaje > 0) {
        this.asignarValor(valor);
      }
    }
  }

  asignarValor(valor) {
    this.porcentaje += valor;
    this.cambioValor.emit(this.porcentaje);
    this.inputSelected.nativeElement.focus();
  }

  onChange(newValue: number) {
    if (newValue >= 100) {
      this.porcentaje = 100;
    } else {
      if (newValue <= 0) {
        this.porcentaje = 0;
      } else {
        this.porcentaje = newValue;
      }
    }

    this.inputSelected.nativeElement.value = this.porcentaje;
    this.cambioValor.emit(newValue);
  }
}
