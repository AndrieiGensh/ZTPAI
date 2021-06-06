import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DiaryTableRecord } from '../../models/diaryTablerecord.model';
import { DiaryTableService } from './diary.service';
import { FoodService } from './food.service';
import { DiaryTableDataSource } from './dataSource/diaryTableDataSource.datasource';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import * as moment from 'moment';

@Component({
  selector: 'app-diary-table',
  templateUrl: './diary-table.component.html',
  styleUrls: ['./diary-table.component.css']
})
export class DiaryTableComponent implements OnInit {

  constructor(
    private diaryService: DiaryTableService,
    public dialog: MatDialog
  ) { }

  @Input()
  tableType!: string;

  @ViewChild(MatTable, { static: true })
  table!: MatTable<any>;

  dataSource!: DiaryTableDataSource;
  displayedColumns = ["foodName", "MUName", "amount", "actions"];

  ngOnInit(): void 
  {
    this.dataSource = new DiaryTableDataSource(this.diaryService);
    this.dataSource.getTableRows(this.tableType);
  }

  onTableRowClick(tableRecord: DiaryTableRecord)
  {
    console.log("After clicking on this row, this is what beeing selected", tableRecord);
  }

  onEditClick(tableRecord: DiaryTableRecord)
  {
    console.log("After clicking on the edit button i got", tableRecord)
  }

  openDialog(action: any,obj: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '400px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event === 'Update'){
        this.updateMeal(result.data);
      }else if(result.event === 'Delete'){
        this.deleteMeal(result.data);
      }else if(result.event === 'Add'){
        this.addNewMeal(result.data);
      }
    });
  }

  async addNewMeal(data: any)
  {
    const date = moment().format("YYYY-MM-DD");
    console.log("The date in the angular is ", date);
    console.log("The date in the add method is ", date);
    await this.diaryService.addToList(data.food_name, this.tableType, data.amount, date)
    .subscribe( result =>{
      console.log("It seems, the add method was a success. It returns in subscribe: ", result);
      this.dataSource.getTableRows(this.tableType);
      console.log("Now i forced my datasource to re-get the table rows for the table. Need to check the result");
    });
  }


  async updateMeal(data: DiaryTableRecord)
  {
    const date = moment().format("YYYY-MM-DD");
    console.log("The date in the angular is ", date);
    console.log("The date in the update method is ", date);
    await this.diaryService.updateListElement(data.recordId, data.amount, date)
    .subscribe( result =>{
      console.log("It seems, the update method was a success. It returns in subscribe: ", result);
      this.dataSource.getTableRows(this.tableType);
      console.log("Now i forced my datasource to re-get the table rows for the table. Need to check the result");
    });
    console.log("The element is updated!");
  }

  async deleteMeal(data: DiaryTableRecord)
  {
    const date = moment().format("YYYY-MM-DD");
    console.log("The date in the angular is ", date);
    console.log("The date in the delete method is ", date);
    await this.diaryService.deleteFromList(data.recordId, date)
    .subscribe( result =>{
      console.log("It seems, the delete method was a success. It returns in subscribe: ", result);
      this.dataSource.getTableRows(this.tableType);
      console.log("Now i forced my datasource to re-get the table rows for the table. Need to check the result");
    });
    console.log('The element is deleted');
  }

}
