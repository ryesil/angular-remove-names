import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NamesProviderService {

  activeUsers=['Chris','Emma','Tuncer'];
  inactiveUsers=['Blake','Tim'];

  constructor() { }

activater(name:string){
this.inactiveUsers.splice(this.inactiveUsers.indexOf(name),1);
this.activeUsers.push(name);
}


inactivator(name:string){
this.activeUsers.splice(this.activeUsers.indexOf(name),1);
this.inactiveUsers.push(name);
}

namesEmitter = new EventEmitter<{name:string, isInactive:boolean}>();



}
