import { Component, OnInit, Input, ElementRef, ViewChild} from '@angular/core';
import { PostModel } from '../../models/post.model';
import { DomSanitizer } from '@angular/platform-browser';
import { ForumService } from '../forum/forum.service';

@Component({
  selector: 'app-forum-post',
  templateUrl: './forum-post.component.html',
  styleUrls: ['./forum-post.component.css']
})
export class ForumPostComponent implements OnInit {

  constructor(
    private sanitizer: DomSanitizer,
    private forumService: ForumService,
    ) { }

  @ViewChild('photo') 
  photo!: ElementRef;

  @Input()
  post!: PostModel;

  saveUrl: any;
  image!: Blob;

  ngOnInit(): void {
    this.forumService.requestPostImage(this.post.id)
    .subscribe(
      (data: Blob) =>{
        this.image = data;
        this.saveUrl = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(this.image));
      })
  }

}
