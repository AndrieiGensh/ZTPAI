import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DiaryTableRecord } from '../../models/diaryTablerecord.model';
import { FoodService } from '../diary-table/food.service';
import { FoodInstance } from '../../models/foodInstance.model';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent {

  action:string;
  local_data:any;

  selected: boolean = false;
  fetchedAny: boolean = false;
  amountOfUnits: number = 1;
  selectedFoodInstance!: FoodInstance;
  foodInstances!: FoodInstance[];
  searchName: string = "";

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: DiaryTableRecord,
    private foodService: FoodService
    ) {
    this.local_data = {...data};
    this.action = this.local_data.action;
  }

  async fetchFoodOptions()
  {
    await this.foodService.findFoodInstancesByName(this.searchName)
    .subscribe(data => {
      if(data.length != 0)
      {
        this.fetchedAny = true;
        this.foodInstances = data;
      }
      else
      {
        this.fetchedAny = false;
      }
    })
  }

  doAction(){
    if(this.action==="Add")
    {
      this.local_data = {...this.selectedFoodInstance, ...{"amount": this.amountOfUnits}};
    }
    this.dialogRef.close({event:this.action,data:this.local_data});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

}