import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {
userSummary={
  email:'',
  subscription:'',
  password:''
}
isSubmitted=false;

  @ViewChild('f') assingmentForm:any
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.userSummary.email=this.assingmentForm.value['email'];
    this.userSummary.subscription=this.assingmentForm.value['subscription']
    this.userSummary.password=this.assingmentForm.value['password']
    this.isSubmitted=true;
    this.assingmentForm.reset();
  }

}
