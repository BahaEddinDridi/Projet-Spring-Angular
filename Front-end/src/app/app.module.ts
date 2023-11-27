// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileAdminComponent } from './profile-admin/profile-admin.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';


@NgModule({
  declarations: [AppComponent, RegistrationComponent,LoginComponent, WelcomeComponent, ProfileComponent, ProfileAdminComponent, ProfileUserComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule,MatSnackBarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
