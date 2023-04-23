import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NamesProviderService } from '../names-provider.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss']
})
export class ActiveUsersComponent implements OnInit {


@Input() user: string='';


  constructor(private namesProviderService:NamesProviderService) { 

  }

  ngOnInit(): void {
  }

setInactive(user:string){
this.namesProviderService.namesEmitter.emit({name:user,isInactive:true});
}

}
