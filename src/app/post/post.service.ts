import { Injectable } from '@angular/core';
import { Post } from './post.module';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {


deletePosts(){
 return this.http.delete('https://ng-complete-guide-adee1-default-rtdb.firebaseio.com/posts.json');
}

makeAndStorePost(postData:Post){
  this.http.post<Post>('https://ng-complete-guide-adee1-default-rtdb.firebaseio.com/posts.json',postData)
  .subscribe(responseData => {
  console.log(responseData);
  })
}

fetchPosts(){
  return this.http.get<{[key:string]:Post}>('https://ng-complete-guide-adee1-default-rtdb.firebaseio.com/posts.json')
  .pipe(map(responseData =>{
    const postsArray = [];
    for (const key in responseData){
      console.log(responseData)
      if(responseData.hasOwnProperty(key)){
      postsArray.push({...responseData[key], id:key})
      }
    }
    return postsArray;
  }))
}

  constructor(private http:HttpClient) { }
}
