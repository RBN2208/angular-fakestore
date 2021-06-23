import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute} from "@angular/router";
import { Location} from "@angular/common";
import {Product} from "../product";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  @Input() product?: Product;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getProduct()
  }
  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id)
      .subscribe(product => this.product = product)
  }
  goBack(): void {
    this.location.back()
  }
  addToCart(product:any){
    this.productService.usedProducts.push(product)
    localStorage.setItem('used', JSON.stringify(this.productService.usedProducts))
  }
}
