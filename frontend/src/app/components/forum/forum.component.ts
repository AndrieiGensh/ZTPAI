import { Component, OnInit, Input } from '@angular/core';
import { ForumService } from './forum.service';
import { PostModel } from 'src/app/models/post.model';
import { Observable, forkJoin} from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { PostDialogBoxComponent } from '../post-dialog-box/post-dialog-box.component';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  constructor(
    private forumService: ForumService,
    private sanitizer: DomSanitizer,
    private dialog: MatDialog
    ) { }

  posts?: PostModel[];
  images: Observable<any>[] = [];
  numberOfPosts: number = 10;

  async ngOnInit()
  {
    await this.forumService.requestInitPosts(this.numberOfPosts)
    .subscribe({
      next: data => {
        this.posts = data;
      }
    })
  }

  openDialog(action: any,obj: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(PostDialogBoxComponent, {
      width: '800px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event === 'Update'){
        console.log("Hi");
      }else if(result.event === 'Delete'){
        console.log("Hello");
      }else if(result.event === 'Add'){
        this.addNewPost(result.data);
      }
    });
  }

  addNewPost(data: FormData)
  {
    this.forumService.addNewPost(data)
    .subscribe((resp: any) =>{
    })
  }


}
