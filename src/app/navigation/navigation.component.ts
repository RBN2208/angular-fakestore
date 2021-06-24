import {ChangeDetectionStrategy, Component, OnInit, EventEmitter} from '@angular/core';
import {ProductService} from "../product.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit {
  constructor( private productService: ProductService) { }

  ngOnInit(): void {
  }
  shopItems = this.productService.usedProducts


}
