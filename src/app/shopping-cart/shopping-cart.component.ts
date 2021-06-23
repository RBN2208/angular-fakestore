import {Component, OnInit} from '@angular/core';
import {Product} from "../product";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  usedProducts: Product[] = this.loadFromLocal('used');
  constructor() {
  }

  ngOnInit(): void {
  }

  loadFromLocal(key:string) {
    const jsonString = localStorage.getItem(key)
    try {
      return JSON.parse(<string>jsonString)
      console.log(JSON.parse(<string>jsonString))
    } catch (error) {
      console.error(error)
    }
  }
}
