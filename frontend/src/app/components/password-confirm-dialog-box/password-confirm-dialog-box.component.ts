import { Component, Inject, Optional, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginService } from '../login/login.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-password-confirm',
  templateUrl: './password-confirm-dialog-box.component.html',
  styleUrls: ['./password-confirm-dialog-box.component.css']
})
export class PasswordConfirmDialogBox implements OnInit{

  passwordForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<PasswordConfirmDialogBox>,
    private fb: FormBuilder,
    private loginService: LoginService
    ) {
  }

  ngOnInit()
  {
    this.passwordForm = this.fb.group({
      passwordFiled: ['']
    });
  }

  doAction(){
    const password = this.passwordForm.get('passwordFiled')?.value;
    this.loginService.requestPasswordVerification(password)
    .subscribe(
      (data: boolean) => {
        if(data === true)
        {
          this.dialogRef.close({event: 'Confirmed', data: password});
        }
        else
        {
          this.dialogRef.close({event: 'NotConfirmed'});
        }
      })
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

}
