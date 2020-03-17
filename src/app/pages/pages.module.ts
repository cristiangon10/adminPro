import { NgModule } from "@angular/core";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficasInicialComponent } from './graficas-inicial/graficas-inicial.component';
import { PagesComponent } from './pages.component';
import { FormsModule } from '@angular/forms';
//Componentes hijos
import { SharedModule } from '../shared/shared.module';

//Rutas hijas
import { PAGES_ROUTES } from './pages.routes';

//Graficas
import { ChartsModule } from 'ng2-charts';

//Temporal
import { ProgressBarComponent } from '../components/progress-bar/progress-bar.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficaDonaComponent } from '../components/grafica-dona/grafica-dona.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        GraficasInicialComponent,
        PagesComponent,
        ProgressBarComponent,
        IncrementadorComponent,
        GraficaDonaComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        GraficasInicialComponent,
    ], imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule,
        CommonModule
    ]
})

export class PagesModule { }