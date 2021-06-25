import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ShoppingCartState } from '../store/shop.state';
import { RemoveProduct } from '../store/shop.actions';
// import { ReturnSum } from '../store/shop.actions';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  public usedProducts$: Observable<Product[]> = this._store.select(ShoppingCartState.getProducts);

  public OverallValue: Observable<number> = this._store.select(ShoppingCartState.addition);

  constructor(private productService: ProductService, private _store: Store) {
  }

  public ngOnInit(): void {
  }

  public removeFromCart(title: string): void{
    this._store.dispatch(new RemoveProduct(title));
  }

}
