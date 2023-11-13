import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUsersComponent } from './components/login-users/login-users.component';
import { LoginAdminsComponent } from './components/login-admins/login-admins.component';
import { CoverComponent } from './components/cover/cover.component';
import { PageErrorComponent } from './components/page-error/page-error.component';
import { DashboardUsersComponent } from './components/dashboard-users/dashboard-users.component';
import { DashboardAdminsComponent } from './components/dashboard-admins/dashboard-admins.component';
import { authGuard } from './guards/auth.guard';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { RegisterAdminComponent } from './components/register-admin/register-admin.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { PagoMultasComponent } from './components/pago-multas/pago-multas.component';
import { PrestamosComponent } from './components/prestamos/prestamos.component';
import { BalanceComponent } from './components/balance/balance.component';

const routes: Routes = [

  {path: '', redirectTo: 'cover', pathMatch: 'full'},
  {path: 'cover', component: CoverComponent, pathMatch: 'full'},
  {path: 'error/:id', component: PageErrorComponent, pathMatch: 'full'},
  {path: 'login-users', component: LoginUsersComponent, pathMatch: 'full'},
  {path: 'login-admins', component: LoginAdminsComponent, pathMatch: 'full'},
  {path: 'recover-password', component: RecoverPasswordComponent, pathMatch: 'full'},
  {path: 'register-user', component: RegisterUserComponent, pathMatch: 'full'},
  {path: 'register-admin', component: RegisterAdminComponent, pathMatch: 'full'},
  {path: 'pago-multas', component: PagoMultasComponent, pathMatch: 'full'},
  {path: 'prestamos', component: PrestamosComponent, pathMatch: 'full'},
  {path: 'balance', component: BalanceComponent, pathMatch: 'full'},
  {path: 'dashboard-users', component: DashboardUsersComponent, canMatch: [authGuard], pathMatch: 'full'},
  {path: 'dashboard-admins', component: DashboardAdminsComponent, canMatch: [authGuard], pathMatch: 'full'},
  {path: '**', redirectTo: 'error/404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
