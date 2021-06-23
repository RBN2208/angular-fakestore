import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";

@Component({
  selector: 'app-formular',
  templateUrl: './formular.component.html',
  styleUrls: ['./formular.component.scss']
})
export class FormularComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  handleSubmit(event: Event){
    event.preventDefault()
    const formElements = event.target
    console.log(formElements)
    // window.alert("Thanks for buying")
    // localStorage.clear()
    // window.location.href = "/"
  }
}
