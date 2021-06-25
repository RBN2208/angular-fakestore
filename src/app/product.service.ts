import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  public products: Product[] = [];
  // usedProducts: Product[] = this.loadFromLocal('used') || []
  constructor(private http: HttpClient) {
  }

  async getProductList(): Promise<any> {
    if (this.products.length > 0) {
      return Promise.resolve(this.products);
    }
    return new Promise(resolve => this.http.get<any>('https://fakestoreapi.com/products').subscribe(
      response => {
        this.setProducts(response);
        resolve(response);
        console.log('response from fetch:',response);
      }
    ));
  }

  public getProduct(id: number): Observable<Product> {
    const product = this.products.find(product => product.id === id)!;
    return of(product);
  }
  // TSLint: Forbidden non null assertion(no-non-null-assertion)
  // TSLint: Shadowed name: 'product'(no-shadowed-variable


  public setProducts(products: Product[]): void {
    this.products = products;
  }

}
