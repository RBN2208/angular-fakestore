import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { ShoppingCartState } from '../store/shop.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent{
  public shopItems$: Observable<number> = this._store.select(ShoppingCartState.amountOfItemsInCart);

  constructor( private _store: Store) { }

}
