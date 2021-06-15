import { Component, OnInit, Input, ElementRef, ViewChild} from '@angular/core';
import { PostModel } from '../../models/post.model';
import { DomSanitizer } from '@angular/platform-browser';
import { ForumService } from '../forum/forum.service';
import { CommentModel } from '../../models/comment.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-forum-post',
  templateUrl: './forum-post.component.html',
  styleUrls: ['./forum-post.component.css']
})
export class ForumPostComponent implements OnInit {

  constructor(
    private sanitizer: DomSanitizer,
    private forumService: ForumService,
    private fb: FormBuilder
    ) { }

  @ViewChild('photo') 
  photo!: ElementRef;

  @Input()
  post!: PostModel;

  saveUrl: any;
  image!: Blob;

  postComments: CommentModel[] = [];
  commentsToShow: number = 0;
  commentsToShowCopy : number = 0;
  moreToShow: number = 0;
  commentAction: string = "Show Comments";

  addingNewComment: boolean = false;

  commentForm!: FormGroup;

  ngOnInit(): void {
    this.forumService.requestPostImage(this.post.id)
    .subscribe(
      (data: Blob) =>{
        this.image = data;
        this.saveUrl = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(this.image));
      });

    this.forumService.requestPostComments(this.post.id)
    .subscribe(
      (data: CommentModel[]) => {
        this.postComments = data;
        this.commentsToShow = this.postComments.length % 3;
        this.moreToShow = (this.postComments.length - this.commentsToShow) > 0 ? 3 : 0;
      });

    this.commentForm = this.fb.group({
      commentContent: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(200)]]
    })
  }

  toggleCommentsSection()
  {
    [this.commentsToShow, this.commentsToShowCopy] = [this.commentsToShowCopy, this.commentsToShow];
  }

  showMoreComments()
  {
    this.commentsToShow += this.moreToShow;
    this.moreToShow = (this.postComments.length - this.commentsToShow) > 0 ? 3 : 0;
  }

  async submitComment()
  {
    const date = moment().format("YYYY-MM-DD");
    const content = this.commentForm.get('commentContent')?.value;
    this.forumService.requestAddNewComment(this.post.id, content, date)
    .subscribe(
      (data) => {
        this.forumService.requestPostComments(this.post.id)
        .subscribe(
          (data: CommentModel[]) => {
            this.postComments = data;
            this.commentsToShow += 1;
          })       
      });
   this. addingNewComment = false;
  }

  cancelComment()
  {
    this.commentForm.get('commentContent')?.setValue('');
    this.addingNewComment = false;
  }

}
