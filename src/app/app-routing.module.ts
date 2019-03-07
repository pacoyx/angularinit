import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './shared/error/error.component';
import { LoginComponent } from './shared/login/login.component';
import { RegistroComponent } from './shared/login/registro.component';

const routes: Routes = [

  { path: 'comercial', loadChildren: './comercial/comercial.module#ComercialModule' },
  { path: 'ventas', loadChildren: './ventas/ventas.module#VentasModule' },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },

  { path: '**', pathMatch: 'full', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
