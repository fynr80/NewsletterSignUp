import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppListComponent } from './components/app-list-component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { SuccessPageComponent } from './success-page/success-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [AppComponent, AppListComponent, SuccessPageComponent, LoginPageComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgClass],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
