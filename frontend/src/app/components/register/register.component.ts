import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { ConfirmedValidator } from '../../helpers/validators/confirm.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  acceptable: boolean = false;
  message!: string;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService
    ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      confirmPassword: ["", [Validators.required, Validators.minLength(8)]]
    },
    {
      validators: this.confirmPassword
    });
  }

  confirmPassword(f: AbstractControl) : ValidationErrors | null
  {
    if(f.get('password')?.value === f.get('confirmPassword')?.value)
    {
      console.log(f.get('password')?.value," MATCH ", f.get('confirmPassword')?.value);
      return null;
    }
    console.log(f.get('password')?.value," MISMATCH ", f.get('confirmPassword')?.value);
    return {mismatch: true};
  }

  f()
  {
    return this.registerForm.controls;
  }

  onSubmit()
  {
    const registerInfo = {
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    };
    this.loginService.requestRegister(registerInfo.email, registerInfo.password)
    .subscribe({
      next: data =>{
        console.log(data);
        this.loginService.setSession(data);
        this.router.navigate(['/user/diary']);
      },
      error: error=>{
        console.log("There was an error", error);
        this.message = "The account for this email exists";
      }
    });
  }
}
