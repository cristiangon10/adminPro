import { Component, OnInit } from '@angular/core';

//Así llamamos un script que se encuentra fuera de angular a un script de Js
declare function init_pluggins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_pluggins();
  }

}
