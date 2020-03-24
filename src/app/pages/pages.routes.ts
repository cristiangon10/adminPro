import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficasInicialComponent } from './graficas-inicial/graficas-inicial.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { 
                path: 'dashboard', 
                component: DashboardComponent, 
                data: { 
                    titulo: 'Dashboard',
                    description: 'Esta es la pagina principal'
                } 
            },
            { 
                path: 'progress', 
                component: ProgressComponent, 
                data: { 
                    titulo: 'Progress',
                    description: 'En esta pagina podemos observar el progreso de alguna vaina'
                } 
            },
            { 
                path: 'grafica', 
                component: GraficasInicialComponent, 
                data: { 
                    titulo: 'Grafica',
                    description: 'En esta pagina podemos observar graficas de la más reciente encuesta'
                } 
            },
            { 
                path: 'promesas', 
                component: PromesasComponent, 
                data: { 
                    titulo: 'Promesas',
                    description: 'En esta pagina podemos ver el manejo de promesas'
                } 
            },
            { 
                path: 'account', 
                component: AccountSettingsComponent, 
                data: { 
                    titulo: 'Ajustes del Tema',
                    description: 'En esta pagina manejamos los diferentes temas con los que cuenta la pagina'
                } 
            },
            { 
                path: 'rxjs', 
                component: RxjsComponent, 
                data: { 
                    titulo: 'RxJs',
                    description: 'En esta pagina vemos los operadores RxJs'
                } 
            },
            { 
                path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);