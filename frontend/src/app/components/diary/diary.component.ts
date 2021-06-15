import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  constructor(
  ) { }

  displayedTables: string[] = ["breakfast", "lunch", "dinner"];

  ngOnInit(): void 
  {

  }
}
