import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ShoppingCartState } from '../store/shop.state';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit {
  public shopItems$ = this._store.select(ShoppingCartState.amountOfItemsInCart);

  constructor( private _store: Store) { }

  ngOnInit(): void {
  }
}
