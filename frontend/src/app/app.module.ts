import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { DeleteComponent } from './delete/delete.component';
import { EmployeeprofileComponent } from './employeeprofile/employeeprofile.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchComponent } from './search/search.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    DeleteComponent,
    EmployeeprofileComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent,
    RegistrationComponent,
    SearchComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
