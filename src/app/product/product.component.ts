import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../product";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Product[] = []
  constructor(private http: HttpClient, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(): void{
    this.http.get<any>('https://fakestoreapi.com/products').subscribe(
      response => {
        this.products = response;
        this.productService.setProducts(response);
        // console.log("getProducts() => products: ",this.products);
        // console.log("getProducts() => productService: ",this.productService);

      }
    );
  }

}
