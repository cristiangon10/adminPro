import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription:Subscription;

  constructor() {

    this.subscription = this.regresaObservable().pipe(
      retry(2)
    ).subscribe(
      numero => console.log('Subs', numero),
      error => console.error('Error...', error),
      () => console.log('El observador terminó')

    )
  }


  ngOnInit() {
  }

  ngOnDestroy() {
    //metodo para cerrar el observable 
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      let count = 0;
      let interval = setInterval(() => {
        count += 1;
        //encargado de emitir el valor

        //Supongamos que la respuesta del observable es un objeto y yo necesito acceder al valor que 
        //hay en el atributo valor
        const salida = {
          valor: count
        };

        observer.next(salida);

        if (count === 3) {
          clearInterval(interval);
          observer.complete();
        }

        // if (count === 2) {
        //   //clearInterval(interval);
        //   observer.error('Error.');
        // }
      }, 1000)
    }).pipe(
      map(resp => resp.valor),
      filter((valor, index) => {
        if ((valor % 2) === 1) {
          return true;
        } else {
          return false;
        }
      })
    )
  }
}
