import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-action-acception',
  templateUrl: './action-acception-dialog-box.component.html',
  styleUrls: ['./action-acception-dialog-box.component.css']
})
export class ActionAcceptionDialogBox {

  action:string;
  local_data:any;

  constructor(
    public dialogRef: MatDialogRef<ActionAcceptionDialogBox>,
    ) {
    this.action = "Accept";
  }

  doAction(){
    this.dialogRef.close({event:this.action});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

}