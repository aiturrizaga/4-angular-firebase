import { Routes } from '@angular/router';
import { LandingPage } from './pages/landing/landing.page';
import { SignInPage } from './pages/sign-in/sign-in.page';
import { RegisterPage } from './pages/register/register.page';

export const routes: Routes = [
  {
    path: '',
    component: LandingPage
  },
  {
    path: 'sign-in',
    component: SignInPage
  },
  {
    path: 'register',
    component: RegisterPage
  }
];
