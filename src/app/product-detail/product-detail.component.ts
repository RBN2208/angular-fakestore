import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { AddProduct } from '../store/shop.actions';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  @Input() product?: Product;
  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductService,
    private _location: Location,
    private _store: Store
  ) { }

  public ngOnInit(): void {
    this.getProduct();
  }
  public getProduct(): void {
    const id = Number(this._route.snapshot.paramMap.get('id'));
    this._productService.getProduct(id)
      .subscribe(product => this.product = product);
  }
  public goBack(): void {
    this._location.back();
  }

  public addToCart(product: any) {
    this._store.dispatch(new AddProduct(product));
    this.addClassOnClick();
  }

  public addClassOnClick() {
    const element = document.getElementById('amountBox');
    element?.classList?.add('addedAmount');
    setTimeout(() => {
      element?.classList?.remove('addedAmount');
    },250);
  }
}
