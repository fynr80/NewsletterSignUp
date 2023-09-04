import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessPageComponent } from './success-page/success-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
const routes: Routes = [
  { path: 'success', component: SuccessPageComponent },
  { path: '', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
