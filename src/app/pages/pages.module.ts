import { NgModule } from "@angular/core";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficasInicialComponent } from './graficas-inicial/graficas-inicial.component';
import { PagesComponent } from './pages.component';

//Componentes hijos
import { SharedModule } from '../shared/shared.module';

//Rutas hijas
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        GraficasInicialComponent,
        PagesComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        GraficasInicialComponent,
    ], imports: [
        SharedModule,
        PAGES_ROUTES
    ]
})

export class PagesModule { }