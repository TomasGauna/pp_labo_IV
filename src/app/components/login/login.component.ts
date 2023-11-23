import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  clave: string = '';

  constructor(private auth: AuthService, private router: Router){}

  ingresar()
  {
    this.auth.signin(this.email, this.clave)?.then(()=>{
      this.auth.logueado = true;
      this.router.navigateByUrl('home');
    });
  }
}
