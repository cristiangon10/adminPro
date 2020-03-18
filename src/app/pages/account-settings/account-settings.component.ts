import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  constructor(
        public settingsService: SettingsService) { }

  ngOnInit() {
    this.asignarCheck();
  }

  cambiarTema(tema: string, link: any) {
    this.cambiarCheck( link );    
    this.settingsService.aplicarTema(tema);
  }

  cambiarCheck( link:any ) {
    let elementos:any = document.getElementsByClassName('selector');
    for (let refe of elementos) {
      refe.classList.remove('working');
    }
    link.classList.add('working');
  }

  asignarCheck(){
    let elementos:any = document.getElementsByClassName('selector');
    let tema = this.settingsService.ajustes;
    for (let refe of elementos) {
      let valor = refe.getAttribute('data-theme');
      if (valor === tema.tema) {
        refe.classList.add('working');
        break;
      }    
    }
  }
}
