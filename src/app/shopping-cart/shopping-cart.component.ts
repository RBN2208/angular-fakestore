import {Component, OnInit} from '@angular/core';
import { FAKE_DATA} from "../fake-data";
import {Product} from "../product";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  usedProducts: Product[] = FAKE_DATA

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.usedProducts)
  }

}
