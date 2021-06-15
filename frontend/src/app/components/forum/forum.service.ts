import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { PostModel } from 'src/app/models/post.model';
import { CommentModel } from 'src/app/models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private  http: HttpClient) { }

  requestInitPosts(N : number)
  {
    return this.http.get<PostModel[]>('http://127.0.0.1:3000/posts/rated', 
      {params: {n: N.toString()}}
     )
    .pipe(
      tap(data => {
        return data;
      })
     );
  }

  addNewPost(formData: FormData)
  {
    const headers = new HttpHeaders({
   "Content-Type": "multipart/form-data"
  });
    return this.http.post<any>('http://127.0.0.1:3000/posts/create-post', formData)
    .pipe(
      tap(data => {
        return data;
      }));
  } 

  requestPostImage(postId: number)
  {
    return this.http.get<Blob>('http://127.0.0.1:3000/posts/post', {params: {postId: postId.toString()}, responseType: 'blob' as 'json'})
    .pipe(
      tap(data => {
        return data;
      }))
  }

  requestPostComments(postId: number)
  {
    return this.http.get<CommentModel[]>('http://127.0.0.1:3000/comment/post-comments', {params: {postId: postId.toString()}})
    .pipe(
      tap(data => {
        return data;
      }))
  }

  requestAddNewComment(postId: number, content: string, date: string)
  {
    return this.http.post('http://127.0.0.1:3000/comment/new-comment', {postId: postId, content: content, date: date})
    .pipe(
      tap(data => {
        return data;
      }))
  }

}
