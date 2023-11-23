import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { LoginPerfilGuard } from './guards/login-perfil.guard';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'login', component: LoginComponent },
  { 
    path: 'alta', 
    loadChildren: () => import('./modules/alta/alta.module').then(m => m.AltaModule),
    canActivate: [LoginGuard]
  },
  { 
    path: 'detalle', 
    loadChildren: () => import('./modules/producto-detalle/producto-detalle.module').then(m => m.ProductoDetalleModule), 
    canActivate: [LoginGuard],
  },
  { path: 'publico', loadChildren: () => import('./modules/listado-publico/listado-publico.module').then(m => m.ListadoPublicoModule) },
  { 
    path: 'container', 
    loadChildren: () => import('./modules/container/container.module').then(m => m.ContainerModule),
    canActivate: [LoginPerfilGuard]
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
