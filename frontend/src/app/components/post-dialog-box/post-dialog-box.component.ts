import { Component, Inject, Optional, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import * as moment from "moment";

@Component({
  selector: 'app-post-dialog-box',
  templateUrl: './post-dialog-box.component.html',
  styleUrls: ['./post-dialog-box.component.css']
})
export class PostDialogBoxComponent implements OnInit{

  action:string;
  local_data:any;

  postForm!: FormGroup;
  hashtagForm!: FormGroup;

  hashtags: any[] = [];
  hashtagsAsString: string = '';

  imageFile!: File;

  initAdd: boolean = false;

  index: number = 0;

  @ViewChild("fileUpload", {static: false}) fileUpload!: ElementRef;

  constructor(
    public dialogRef: MatDialogRef<PostDialogBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef

    ) { 
    this.local_data = {...data};
    this.action = this.local_data.action;
  }

  ngOnInit()
  {
    this.postForm = this.fb.group({
      title : ['', [Validators.required, Validators.minLength(10)]],
      content : ['', [Validators.required, Validators.minLength(100)]],
     // image : [null,[Validators.required]]
     });
    this.hashtagForm = this.fb.group({
      hashtagValue: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  uploadFile()
  {
    this.imageFile = this.fileUpload.nativeElement.files[0];
  }

  convertHashtagsToString()
  {
    for(let hash of this.hashtags)
    {
      this.hashtagsAsString = this.hashtagsAsString + "#" + hash.value;
    }
  }

  initAddHashtag()
  {
    this.initAdd = true;
  }

  addToHashtags()
  {
    this.hashtags = [...this.hashtags, {id: this.index, value: this.hashtagForm.get('hashtagValue')?.value}];
    //this.hashtags = this.hashtags;
    this.cdr.detectChanges();
    this.cancelAddHashtag();
  }

  deleteFromHashtags(id: number)
  {
    this.hashtags.forEach((hashtag, ind) => {
      if(hashtag.id === id)
      {
        this.hashtags.splice(ind, 1);
      }
    })
  }

  cancelAddHashtag()
  {
    this.initAdd = false;
  }

  doAction(){
    const formData: FormData = new FormData();
    formData.append('image', this.imageFile, this.imageFile.name);
    formData.append('title', this.postForm.get('title')?.value);
    formData.append('content', this.postForm.get('content')?.value);
    this.convertHashtagsToString();
    formData.append('hashtags', this.hashtagsAsString);
    formData.append('date', moment().format("YYYY-MM-DD"));
    this.dialogRef.close({event:'Add', data:formData});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

}

