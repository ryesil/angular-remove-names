import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { NamesProviderService } from '../names-provider.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.scss']
})
export class InactiveUsersComponent implements OnInit {

@Input() user:string='';

//@Output() activate=new EventEmitter<string>();


  constructor(private namesProviderService: NamesProviderService) { }

  ngOnInit(): void {
  }


setActive(user:string){
//this.activate.emit(event);
this.namesProviderService.namesEmitter.emit({name:user,isInactive:false});
  }

}
