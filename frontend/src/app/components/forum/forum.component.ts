import { Component, OnInit, Input } from '@angular/core';
import { ForumService } from './forum.service';
import { PostModel } from 'src/app/models/post.model';
import { Observable, forkJoin} from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  constructor(
    private forumService: ForumService,
    private sanitizer: DomSanitizer
    ) { }

  posts?: PostModel[];
  images: Observable<any>[] = [];
  numberOfPosts: number = 10;

  async ngOnInit()
  {
    await this.forumService.requestInitPosts(this.numberOfPosts)
    .subscribe({
      next: data => {
        console.log("I got these as the result of forum initiation", data);
        this.posts = data;
      }
    })
  }

}
