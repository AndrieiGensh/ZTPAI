import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() 
  {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  async onSubmit()
  {
    const loginInfo = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
    await this.loginService.requestLogin(loginInfo.email, loginInfo.password)
    .subscribe({
      next: data =>{
        this.loginService.setSession(data);
        this.router.navigate(['/user/diary']);
      },
      error: error=>{
        console.log("There was an error", error);
      }
    });
  }

}
