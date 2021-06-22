import {Injectable} from '@angular/core';
import {Product} from "./product"
import {Observable, of} from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  products: Product[] = [];

  constructor(private http: HttpClient) {
  }

  async getProductList(): Promise<any> {
    if (this.products.length > 0) {
      return Promise.resolve(this.products)
    }
    return new Promise(resolve => this.http.get<any>('https://fakestoreapi.com/products').subscribe(
      response => {
        this.setProducts(response);
        resolve(response)
      }
    ))
  }

  getProduct(id: number): Observable<Product> {
    const product = this.products.find(product => product.id === id)!;
    return of(product);
  }

  setProducts(products: Product[]): void {
    this.products = products;
  }

  filterProducts(products: Product[], filter: string): any {
    const filteredProducts = this.products.filter(product => product.category === filter)
    this.setProducts((filteredProducts))
    console.log(filteredProducts)
  }
}
