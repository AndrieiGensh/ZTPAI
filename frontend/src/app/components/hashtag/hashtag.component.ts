import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-hashtag',
  templateUrl: './hashtag.component.html',
  styleUrls: ['./hashtag.component.css']
})
export class HashtagComponent implements OnInit {

  constructor() { }

  @Input()
  hashtagId!: number;

  @Input()
  hashtagValue!: string;

  @Output()
  deleteHashtag: EventEmitter<number> = new EventEmitter<number>();


  ngOnInit(): void {
  }

  onDeleteClick()
  {
    this.deleteHashtag.emit(this.hashtagId);
  }

}
