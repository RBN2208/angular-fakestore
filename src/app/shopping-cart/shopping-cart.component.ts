import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ShoppingCartState } from '../store/shop.state';
import { RemoveProduct } from '../store/shop.actions';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  public usedProducts$: Observable<Product[]> = this._store.select(ShoppingCartState.getProducts);

  public SUM = this.productService.addition(this.productService.usedProducts)

  constructor(private productService: ProductService, private _store: Store) {
  }

  ngOnInit(): void {
  }

  public removeFromCart(title: string){
    this._store.dispatch(new RemoveProduct(title));
  }
}
