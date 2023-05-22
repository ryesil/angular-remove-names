import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor() { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    //Intercepting logic here.
    // console.log(req);
    // console.log(req.url)
    // console.log("request is on its way");
    //we can Also modify the req object. Req is immutable
    //We need to make a new object from the clone of the req
    const modifiedRequest = req.clone({headers: req.headers.append('Auth','xyz')})


    //We need to return req with the next.
    //original req
    // return next.handle(req);
    //Modified Request
    //We can modify response by adding a pipe which returns an event
    return next.handle(modifiedRequest)

  }


}
