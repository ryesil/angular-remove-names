import { Injectable } from '@angular/core';
import { Post } from './post.module';
import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Subject, map, catchError, throwError, tap } from 'rxjs';
import { serialize } from 'v8';

@Injectable({
  providedIn: 'root'
})
export class PostService {
error = new Subject<string>();

deletePosts(){
 return this.http.delete('https://ng-complete-guide-adee1-default-rtdb.firebaseio.com/posts.json',
 
 {observe: 'events' ,
  responseType:'json'//text, blob

}
 
 ).pipe(tap( event=>{
  console.log(event)
  if(event.type === HttpEventType.Sent){
   ///...Do something
  }
  if(event.type === HttpEventType.Response){
    console.log(event.body)
  }
 }))
}

makeAndStorePost(postData: Post) {
  this.http
    .post<Post>('https://ng-complete-guide-adee1-default-rtdb.firebaseio.com/posts.json', postData, {
      observe: 'response'
     })
    .subscribe({
      next: responseData => {
        console.log(responseData);
      },
      error: error => {
        this.error.next(error.message);
      }
    });
}

fetchPosts(){
  let searchParams=new HttpParams();
  searchParams = searchParams.append('buldun', 'bulamadin');
  searchParams = searchParams.append('custom', 'key');
  return this.http.get<{[key:string]:Post}>('https://ng-complete-guide-adee1-default-rtdb.firebaseio.com/posts.json',{
    headers: new HttpHeaders({"Custom-Headers":"Hello"}),
    //params: new HttpParams().set('print','pretty').set('eben','ebemiz')
    params:searchParams,
    responseType:'json'
  })
  .pipe(map(responseData =>{
    const postsArray = [];
    for (const key in responseData){
      console.log(responseData)
      if(responseData.hasOwnProperty(key)){
      postsArray.push({...responseData[key], id:key})
      }
    }
    return postsArray;
  }),
  catchError(errorRes=>{
    //Send to analytics server
   return  throwError(errorRes)
  })
  )
}

  constructor(private http:HttpClient) { }
}
