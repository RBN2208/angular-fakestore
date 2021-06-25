import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public products: Product[] = [];
  constructor(private productService: ProductService) {
  }

  public async ngOnInit(): Promise<void> {
    await this.resetProducts();
  }

  public async resetProducts(): Promise<void> {
    this.products = await this.productService.getProductList();
  }

  public async filterProducts(filter: string): Promise<void> {
    await this.resetProducts();
    const filteredProducts: Product[] = this.products.filter(product => product.category === filter);
    this.products = filteredProducts;
    console.log('filtered products :', filteredProducts);
  }
}
