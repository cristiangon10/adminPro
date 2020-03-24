import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  title: string;
  description: string;

  constructor(
    private router: Router,
    private tituloPage: Title,
    private metaContent: Meta) {

    this.getDataRoute().subscribe(
      evento => {
        this.title = evento.titulo;
        this.description = evento.description;
        this.tituloPage.setTitle(this.title);

        const metaTag: MetaDefinition = {
          name: this.title,
          content: this.description
        };

        this.metaContent.updateTag(metaTag);
      }
    )
  }

  ngOnInit() {
  }

  //Se extrae la data enviada a traves de rutas...
  getDataRoute() {
    return this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map(event => event.snapshot.data)
    )
  }

}
