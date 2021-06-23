import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formular',
  templateUrl: './formular.component.html',
  styleUrls: ['./formular.component.scss']
})
export class FormularComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit(event: Event){
    event.preventDefault()
    window.alert("Thanks for buying")
  }
}
