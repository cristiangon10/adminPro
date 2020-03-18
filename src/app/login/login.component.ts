import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Así llamamos un script que se encuentra fuera de angular a un script de Js
declare function init_pluggins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    init_pluggins();
  }

  ingresar(){
    this.router.navigate(['/dashboard']);
  }

}
