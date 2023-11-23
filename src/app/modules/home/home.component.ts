import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Firestore } from '@angular/fire/firestore';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  git:string = "https://api.github.com/users/TomasGauna";
  perfil:any;
  user: any;

  constructor(private http: HttpClient, private auth: AuthService, private firestore: Firestore){}

  ngOnInit(): void 
  {
    this.http.get(this.git).subscribe((res:any) => this.perfil = res);
    FirestoreService.traerFs('usuarios', this.firestore).subscribe((usuarios)=>{
      usuarios.forEach((u)=>{
        if(this.auth.get_user()?.email === u.email)
        {
          this.user = u;
          this.auth.logueado = true;
        }
      });
    });
  }

  cerrarSesion()
  {
    this.auth.logout()?.then(()=>{
      this.user = null;
      this.auth.logueado = false;
    });
  }
}
