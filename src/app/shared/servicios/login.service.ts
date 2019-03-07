import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  menu: any = [
    {
      titulo: 'TUBANQUITO',
      icono: 'fas fa-piggy-bank fa-3x',
      submenu: [
        { titulo: 'Comercial', url: '/comercial', icono: 'fas fa-money-check-alt' },
        { titulo: 'ventas', url: '/ventas', icono: 'fas fa-file-invoice-dollar' },
        { titulo: 'Compras', url: '/compras', icono: 'fas fa-truck' },
        { titulo: 'Almacen', url: '/almacen', icono: 'fas fa-warehouse' },
        { titulo: 'RR.HH', url: '/rrhh', icono: 'fas fa-briefcase' }
      ]
    }
  ];



  constructor(private router: Router, private authServis: AngularFireAuth) { }

  login(email: string, pwd: string) {
    return new Promise((resolve, reject) => {
      this.authServis.auth.signInWithEmailAndPassword(email, pwd).then(
        datos => {
          resolve(datos);

          this.authServis.auth.currentUser.getIdToken().then(
            token => {
              console.log('token new:', token);
            });


        },
        error => reject(error)
      )
    });
  }

  getUsuario() {

    if (this.authServis.auth.currentUser.email) {
      return this.authServis.auth.currentUser.email;
    } else {
      return "No logueado";
    }

  }

  getAuth() {
    return this.authServis.authState.pipe(map(auth => auth));
  }

  logout() {
    this.authServis.auth.signOut().then(
      () => this.router.navigate(['login'])
    );
  }

  registrarse(email: string, pwd: string) {
    return new Promise((resolve, reject) => {
      this.authServis.auth.createUserWithEmailAndPassword(email, pwd)
        .then(datos => {
          resolve(datos), err => reject(err)
        })
    });
  }





}
