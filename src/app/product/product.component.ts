import { Component, OnInit } from '@angular/core';
import {Product} from "../product";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Product[] = []
  constructor(private productService: ProductService) {
  }

  async ngOnInit() {
    await this.resetProducts()
  }

  async resetProducts(){
    this.products = await this.productService.getProductList()
    console.log(this.products)
  }

  async filterProducts(filter: string){
    await this.resetProducts()
    const filteredProducts = this.products.filter(product => product.category === filter)
    this.products = filteredProducts;
    console.log(filteredProducts)
  }
}
