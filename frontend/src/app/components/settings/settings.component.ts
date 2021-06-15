import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from '../login/login.service';
import { ActionAcceptionDialogBox } from '../action-acception-dialog-box/action-acception-dialog-box.component';
import { PasswordConfirmDialogBox } from '../password-confirm-dialog-box/password-confirm-dialog-box.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dialog: MatDialog,
    private loginService: LoginService
    ) { }

  infoEditingMode: boolean = false;
  passwordEditingMode: boolean = false;
  policyShow: boolean = false;

  displayPasswordChangeButton:boolean  = true;
  displayInfoChangeButton: boolean = true;

  userInfoForm!: FormGroup;
  passwordForm!: FormGroup;

  currentPassword: string = "";
  message: string = "";
  showMessage : boolean = false;

  currentName: string = "";
  currentSurname: string = "";

  ngOnInit(): void {
    this.userInfoForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      userSurname: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
    });

    this.passwordForm = this.fb.group({
      password: ['', [Validators.required]]
    },
    {
      validators: this.validatePassword
    });

    this.loginService.requestUserInfo()
    .subscribe(
      (data: any) => {
        this.currentName = data.name != undefined ? data.name: "not yet defined";
        this.currentSurname = data.surname != undefined ? data.surname : "not yet undefined";
        this.userInfoForm.get('userName')?.setValue(this.currentName);
        this.userInfoForm.get('userSurname')?.setValue(this.currentSurname);
    });
  }

  validatePassword(f: AbstractControl) : ValidationErrors | null
  {
    const newPassword = f.get('password')?.value;
    if(newPassword.length < 8 || newPassword.length > 16)
    {
      return {wrongPassword: {message : "Wrong password langth (max - 16, min - 8)"}};
    }
    return null;
  }

  async requestPasswordEdit()
  {
    this.passwordPrompt()
    .subscribe(
      (data: any) =>{
        if(data.event === "NotConfirmed")
        {
          this.passwordEditingMode = false;
          this.currentPassword = "";
          alert("Password not confirmed");
        }
        else if(data.event === "Confirmed")
        {
          this.currentPassword = data.data;
          this.passwordEditingMode = true;
          this.displayPasswordChangeButton = false;
          alert("Password confirmed. You may proceed");
        }
        else
        {
          this.passwordForm.controls['password']?.disable();
          this.currentPassword = "";
        }
      });
  }

  confirmPasswordEdit()
  {
    const password = this.passwordForm.get('password')?.value;
    this.loginService.requestPasswordChange(password)
    .subscribe(
      (data: boolean) => {
        if(data)
        {
          this.message = "Password changed successfully";
          this.showMessage = true;
        }
        else
        {
          this.message = "Password chang failed";
          this.showMessage = true;
        }
        this.cancelPasswordEdit();
    });
  }

  cancelPasswordEdit()
  {
    this.passwordEditingMode = false;
    this.passwordForm.get('password')?.setValue("");
    this.passwordForm.get('password')?.markAsPristine();
    this.passwordForm.get('password')?.markAsUntouched();
    this.currentPassword = '';
    this.displayPasswordChangeButton = true;
  }

  requestAccountDelete()
  {
    this.passwordPrompt()
    .subscribe(
      (data: any) =>{
        if(data.event === "Confirmed")
        {
          this.loginService.requestAccountDelete()
          .subscribe(
            (data: boolean) => {
              this.router.navigate(['/login']);
          })
        }
        else if(data.event === "NotConfirmed")
        {
          alert("Password not confirmed. Cant delete account!");
        }
        else
        {
          alert("No actions were taken");
        }
      });
  }

  requestInfoEdit()
  {
    this.userInfoForm.controls['userName'].enable();
    this.userInfoForm.controls['userSurname'].enable();
    this.displayInfoChangeButton = false;
    this.infoEditingMode = true;
  }

  confirmInfoEdit()
  {
    const newName: string = this.userInfoForm.get('userName')?.value;
    const newSurname: string = this.userInfoForm.get('userSurname')?.value;
    this.loginService.requestUserInfoChange(newName, newSurname)
    .subscribe(
      (data: boolean) => {
        if(data)
        {
          this.currentName = newName;
          this.currentSurname = newSurname;
          alert("Changes applied successfully");
        }
        else
        {
          alert("Chnages were not applied due to server error");
        }
        this.cancelInfoEdit();
    });
  }

  cancelInfoEdit()
  {
    this.userInfoForm.controls['userName'].disable();
    this.userInfoForm.controls['userSurname'].disable();
    this.userInfoForm.get('userName')?.setValue(this.currentName);
    this.userInfoForm.get('userSurname')?.setValue(this.currentSurname);
    this.infoEditingMode = false;
    this.displayInfoChangeButton = true;
  }

  passwordPrompt()
  {
    const dialogRef = this.dialog.open(PasswordConfirmDialogBox, {
      width: '800px'
    });

    return dialogRef.afterClosed();
  }

}
