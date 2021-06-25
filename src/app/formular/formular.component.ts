import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formular',
  templateUrl: './formular.component.html',
  styleUrls: ['./formular.component.scss']
})
export class FormularComponent implements OnInit {

  public profileForm: any = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormControl('',Validators.required),
    zipcode: new FormControl('',Validators.required),
    location: new FormControl('',Validators.required),
    payment: new FormGroup({
      payment: new FormControl(false),
    })
  });


  constructor() { }

  public ngOnInit(): void {
  }

  public handleSubmit(): void{
    console.log(this.profileForm.value);
    localStorage.clear();
  }
}
