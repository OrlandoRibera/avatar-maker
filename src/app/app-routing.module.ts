import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/auth/components/login/login.component';
import { AvatarMkrComponent } from './modules/avatar/components/avatar-mkr/avatar-mkr.component';
import { AuthGuard } from './core/auth/auth.guard';
import { SignUpComponent } from './core/auth/components/sign-up/sign-up.component';
import { HomeComponent } from './modules/avatar/components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'logout',
    component: LoginComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'signUp',
    component: SignUpComponent,
  },
  {
    path: 'create',
    component: AvatarMkrComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
