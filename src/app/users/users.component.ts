import { Component, OnInit } from '@angular/core';
import { NamesProviderService } from '../names-provider.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  selectedUser:{name:string, isInactive:boolean}={name:"",isInactive:false};

  activeUsers:string[];
  inactiveUsers:string[];


  constructor(private namesProviderService:NamesProviderService){
    this.activeUsers=this.namesProviderService.activeUsers;
    this.inactiveUsers=this.namesProviderService.inactiveUsers;
    this.namesProviderService.namesEmitter.subscribe(
      value=> {
      if(value.isInactive){
        this.namesProviderService.inactivator(value.name)
      }else{
        this.namesProviderService.activater(value.name);
      }
    }
    )
  }

}
