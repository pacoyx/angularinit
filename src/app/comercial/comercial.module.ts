import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComercialRoutingModule } from './comercial-routing.module';
import { HomecomercialComponent } from './componentes/homecomercial/homecomercial.component';
import { PromocionesComponent } from './componentes/promociones/promociones.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';

@NgModule({
  declarations: [HomecomercialComponent, PromocionesComponent, ContactoComponent, NosotrosComponent],
  imports: [
    CommonModule,
    ComercialRoutingModule
  ]
})
export class ComercialModule { }
