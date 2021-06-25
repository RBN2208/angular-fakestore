import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ShoppingCartState } from '../store/shop.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit {
  public shopItems$: Observable<number> = this._store.select(ShoppingCartState.amountOfItemsInCart);

  constructor( private _store: Store) { }

  public ngOnInit(): void {
  }
}
