import { Routes } from '@angular/router';
import { LoginComponent } from './core/auth/pages/login/login.component';
import { DahsboardComponent } from './features/dahsboard/dahsboard.component';

export const routes: Routes = [
    { path: '',   redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DahsboardComponent },
];
