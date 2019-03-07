import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { HomeventasComponent } from './componentes/homeventas/homeventas.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { BoletasComponent } from './componentes/boletas/boletas.component';

@NgModule({
  declarations: [HomeventasComponent, ClientesComponent, BoletasComponent],
  imports: [
    CommonModule,
    VentasRoutingModule
  ]
})
export class VentasModule { }
