import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {Subscription, map} from 'rxjs'
import { Post } from './post.module';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {
loadedPosts:Post[]=[];
isFetching=false;
error:any=null;
private errorSubscription: Subscription

onClearPosts(){
  this.postService.deletePosts().subscribe(()=>{
    this.loadedPosts=[];
  }, err=>{
this.error=err?.message;
  })
}

onSubmitPost(){
  const postData:{title:string, content:string} = this.postForm.value;
    //Firebase requirement is that we need to add .json at the end of the url
  this.postService.makeAndStorePost(postData);
  }

onClickFetch(){
  this.isFetching = true;
  this.postService.fetchPosts().subscribe(posts=>{
    this.isFetching = false;
    this.loadedPosts=posts;
  },
  error=>{
    this.isFetching =false;
    this.error = error.message;
  }
  )
}

ngOnInit(): void {
  this.errorSubscription = this.postService.error.subscribe(errorMessage=>this.error=errorMessage);
  this.isFetching = true;
  this.postService.fetchPosts().subscribe({
    next:posts=>{
      this.isFetching = false;
      this.loadedPosts=posts;
    },
    error : err=>{
      this.isFetching = false;
      this.error=err?.error?.error;
        }
  })
}

  @ViewChild('f') postForm: any;
constructor(private http:HttpClient, private postService:PostService){

}
  ngOnDestroy(): void {
    this.errorSubscription.unsubscribe();
  }

  onHandleError(){
    this.error=null;
  }

}
