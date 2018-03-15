import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { FormsModule } from '@angular/forms'
import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { InclementadorComponent } from '../components/inclementador/inclementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

@NgModule({
  imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule
  ],
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    InclementadorComponent,
    GraficoDonaComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
  ]
})
export class PagesModule { }
