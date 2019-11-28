import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ErrorComponent } from './shared/error/error.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AngularFireStorageModule,StorageBucket } from '@angular/fire/storage';

import { environment } from 'src/environments/environment';
import { LoginComponent } from './shared/login/login.component';
import { RegistroComponent } from './shared/login/registro.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ErrorComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    
    AngularFireModule.initializeApp(environment.firestore, 'appBanco'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],

  providers: [
    { provide: FirestoreSettingsToken, useValue: {} },
    { provide: StorageBucket, useValue: 'appbanco-a586b.appspot.com' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
