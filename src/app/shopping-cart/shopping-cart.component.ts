import {Component, OnInit} from '@angular/core';
import {Product} from "../product";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  usedProducts: Product[] = this.productService.usedProducts
  SUM = this.productService.addition(this.productService.usedProducts)
  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
  }

  removeFromCart(id: number){
    const filteredArray = this.usedProducts.filter(product => product.id != id)
    this.productService.remove(filteredArray);
  }
}
