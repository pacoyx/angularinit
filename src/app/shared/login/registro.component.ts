import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { LoginService } from '../servicios/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  @ViewChild('txtemail') txtemail: ElementRef;
  @ViewChild('txtpwd') txtpwd: ElementRef;

  constructor(private router: Router, private loginservis: LoginService) { }

  ngOnInit() {
  }

  registrar() {
    this.loginservis.registrarse(this.txtemail.nativeElement.value, this.txtpwd.nativeElement.value)
    .then(res => {      
      console.log('respuesta: ',res);        
      this.router.navigate(['ventas']);

    }).catch(err => {
      console.log('Error: ', err);
    });

  }

}
