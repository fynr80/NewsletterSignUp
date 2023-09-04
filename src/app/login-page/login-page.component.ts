import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  constructor(private router: Router) {}

  validationValue: boolean = false;
  emailInput: string = '';
  submit() {
    this.validationValue = false;
    if (
      this.emailInput == '' ||
      !this.emailInput.match(/[a-z0-9_-]+@[a-z0-9_-]+\.[a-z]+/)
    ) {
      this.validationValue = true;
    } else {
      this.router.navigate(['/success']);
    }
  }
}
