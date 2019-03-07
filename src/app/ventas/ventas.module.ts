import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { HomeventasComponent } from './componentes/homeventas/homeventas.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { BoletasComponent } from './componentes/boletas/boletas.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';

@NgModule({
  declarations: [HomeventasComponent, ClientesComponent, BoletasComponent, DashboardComponent],
  imports: [
    CommonModule,
    VentasRoutingModule
  ]
})
export class VentasModule { }
