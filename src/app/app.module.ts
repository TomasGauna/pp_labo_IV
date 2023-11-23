import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AltaComponent } from './components/container/alta/alta.component';
import { ListadoComponent } from './components/container/listado/listado.component';
import { ModificarComponent } from './components/container/modificar/modificar.component';
import { BajaComponent } from './components/container/baja/baja.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"pp-labo-4c5ae","appId":"1:545498050069:web:65539cc4fad6cfc79e681c","databaseURL":"https://pp-labo-4c5ae-default-rtdb.firebaseio.com","storageBucket":"pp-labo-4c5ae.appspot.com","apiKey":"AIzaSyAN_xsL7fan6Yifetl6sJRoSYQax9i0XYg","authDomain":"pp-labo-4c5ae.firebaseapp.com","messagingSenderId":"545498050069"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
