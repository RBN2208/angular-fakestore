import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  public products: Product[] = [];
  constructor(private http: HttpClient) {
  }

  public async getProductList(): Promise<any> {
    if (this.products.length > 0) {
      return Promise.resolve(this.products);
    }
    return new Promise(resolve => this.http.get<any>('https://fakestoreapi.com/products').subscribe(
      response => {
        this.setProducts(response);
        resolve(response);
      }
    ));
  }

  public getProduct(id: number): Observable<Product> {
    const selectedProduct: any = this.products?.find((product: Product) => product.id === id);
    return of(selectedProduct);
  }

  public setProducts(products: Product[]): void {
    this.products = products;
  }

}
