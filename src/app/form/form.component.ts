import { Component, Input, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

suggestedUserName(){
  const suggestedUserName = 'Superuser';
  //update the form 1st way
  // this.signupForm.setValue({
  //   userData:{
  //     username:suggestedUserName,
  //     email:''
  //   },
  //   secret:'pet',
  //   questionAnswer:'',
  //   gender:'male'
  // })
  //update form 2nd way
  this.signupForm.form.patchValue({
    userData:{
      username:suggestedUserName
    }
  })
}

answer:string='';
genders = ['male', 'female'];

  @ViewChild('f')
  signupForm:any
  constructor() { }



  ngOnInit(): void {
  }

onSubmit(){
  console.log(this.signupForm)
}


}
