import { Component, Input, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

answer:string='';


  @ViewChild('f')
  signupForm:any
  constructor() { }


  ngOnInit(): void {
  }

onSubmit(){
  console.log(this.signupForm)

}


}
