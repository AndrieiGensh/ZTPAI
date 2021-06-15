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
    await this.diaryService.addToList(data.food_name, this.tableType, data.amount, date)
    .subscribe( result =>{
      this.dataSource.getTableRows(this.tableType);
    });
  }


  async updateMeal(data: DiaryTableRecord)
  {
    const date = moment().format("YYYY-MM-DD");
    await this.diaryService.updateListElement(data.recordId, data.amount, date)
    .subscribe( result =>{
      this.dataSource.getTableRows(this.tableType);
    });
  }

  async deleteMeal(data: DiaryTableRecord)
  {
    const date = moment().format("YYYY-MM-DD");
    await this.diaryService.deleteFromList(data.recordId, date)
    .subscribe( result =>{
      this.dataSource.getTableRows(this.tableType);
    });
  }

}
