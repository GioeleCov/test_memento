import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) }, { path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) }, { path: 'signup', loadChildren: () => import('./components/signup/signup.module').then(m => m.SignupModule) }, { path: 'navbar', loadChildren: () => import('./components/navbar/navbar.module').then(m => m.NavbarModule) }, { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) }, { path: 'footer', loadChildren: () => import('./components/footer/footer.module').then(m => m.FooterModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
