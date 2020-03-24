import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    this.contarTres().then(
      mensaje=>console.log('Terminó', mensaje)
    ).catch(
      error => {
        console.error('Fallo: ' + error);
      }
    )

   }

  ngOnInit() {
  }

  contarTres(): Promise<Boolean>{
    return new Promise( (resolve, reject) => {
      let contador = 0;
      let interval = setInterval(() => {
        contador+=1;
        console.log(contador);
        
        if (contador===3) {
          resolve(true);
          clearInterval(interval);
        }

        if (contador === 10) {
          reject('Fallo')
        }
      }, 1000);
    });
  }

}
