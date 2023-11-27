import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileAdminComponent } from'./profile-admin/profile-admin.component'
import { ProfileUserComponent } from './profile-user/profile-user.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: 'register', pathMatch: 'full' }, // Redirect to login by default
  { path: 'user/userProfile', component: ProfileUserComponent },
  { path: 'admin/adminProfile', component: ProfileAdminComponent },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
