import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {GsbLoginService} from '../gsb-login.service';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  standalone: true,
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private loginService: GsbLoginService) {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  onSubmit() {
    if(this.loginForm.valid){
      const{login, password } = this.loginForm.value;
      this.loginService.serviceEnvoieLogin(login,password).subscribe( {
        next: data => console.log('Login successful', data),
        error: error => console.error('Login failed', error)
      });
    }
  }
}
