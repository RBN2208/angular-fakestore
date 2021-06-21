import { Injectable } from '@angular/core';
import {Product} from "./product"
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  products: Product[] = [];

  constructor() { }


  getProduct(id: number): Observable<Product> {
    const product = this.products.find(product => product.id === id)!;
    return of(product);
  }

  setProducts(products:Product[]): void{
    this.products = products;
  }

}
