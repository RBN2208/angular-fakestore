import {Injectable} from '@angular/core';
import {Product} from "./product"
import {Observable, of, Subject} from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  products: Product[] = [];
  usedProducts: Product[] = this.loadFromLocal('used') || []
  public productsUpdate$: Subject<any> = new Subject()
  constructor(private http: HttpClient) {
  }

  async getProductList(): Promise<any> {
    if (this.products.length > 0) {
      return Promise.resolve(this.products)
    }
    return new Promise(resolve => this.http.get<any>('https://fakestoreapi.com/products').subscribe(
      response => {
        this.setProducts(response);
        resolve(response);
        console.log("response from fetch:",response)
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

  loadFromLocal(key:string) {
    const jsonString = localStorage.getItem(key)
    try {
      return JSON.parse(<string>jsonString)
    } catch (error) {
      console.error(error)
    }
  }

  addition(products: Product[]){
    let values = products.map(({price})=> Number(price));
    return values.reduce((a , b) => a + b, 0)
  }
  // public add():void{}
  public remove(newArray:Product[]):void{
    localStorage.setItem('used', JSON.stringify(newArray))
  }

}
