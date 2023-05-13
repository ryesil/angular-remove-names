import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import {map} from 'rxjs'
import { Post } from './post.module';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
loadedPosts:Post[]=[];
isFetching=false;

onClearPosts(){
  this.postService.deletePosts().subscribe(()=>{
    this.loadedPosts=[];
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
  })
}

ngOnInit(): void {
  this.isFetching = true;
  this.postService.fetchPosts().subscribe(posts=>{
    this.isFetching = false;
    this.loadedPosts=posts;
  })
}

  @ViewChild('f') postForm: any;
constructor(private http:HttpClient, private postService:PostService){

}

}
