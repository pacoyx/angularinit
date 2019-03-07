import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoginService } from '../servicios/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('txtemail') txtemail: ElementRef;
  @ViewChild('txtpwd') txtpwd: ElementRef;

  constructor(private router: Router, private loginservis: LoginService) { }

  ngOnInit() {
  }


  ingresar() {
    // console.log(this.txtemail.nativeElement.value, this.txtpwd.nativeElement.value);

    this.loginservis.login(this.txtemail.nativeElement.value, this.txtpwd.nativeElement.value)
      .then(res => {
        
        console.log('respuesta: ',res);        
        this.router.navigate(['ventas']);

      }).catch(err => {
        console.log('Error: ', err);
      });

  }

}
