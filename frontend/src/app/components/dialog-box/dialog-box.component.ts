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
    console.log(data);
    this.local_data = {...data};
    console.log("LocalData in dialog box constructor is ", this.local_data);
    this.action = this.local_data.action;
    console.log("action in dialog box constructor is ", this.action);
  }

  async fetchFoodOptions()
  {
    console.log("I am in the fetch function, the search name is ", this.searchName);

    await this.foodService.findFoodInstancesByName(this.searchName)
    .subscribe(data => {
      console.log("I got these results", data);
      if(data.length != 0)
      {
        console.log("There are some data after all", data);
        this.fetchedAny = true;
        this.foodInstances = data;
        //this.selected = false;
      }
      else
      {
        console.log('There are no data, apperently', data);
        this.fetchedAny = false;
      }
    })
  }

  doAction(){
    if(this.action==="Add")
    {
      this.local_data = {...this.selectedFoodInstance, ...{"amount": this.amountOfUnits}};
      console.log("After merging the objects in dialog box :", this.local_data);
    }
    this.dialogRef.close({event:this.action,data:this.local_data});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

}