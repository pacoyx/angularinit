import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomecomercialComponent } from './componentes/homecomercial/homecomercial.component';
import { PromocionesComponent } from './componentes/promociones/promociones.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';

const routes: Routes = [
  { path: '', component: HomecomercialComponent ,
    children: [
      { path: 'promo', component: PromocionesComponent },
      { path: 'nosotros', component: NosotrosComponent },
      { path: 'contactos', component: ContactoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComercialRoutingModule { }
