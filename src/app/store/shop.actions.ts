import { Product } from './product.model';

export class AddProduct {
  static readonly type = '[PRODUCT] Add';
  constructor(public payload: Product) {
  }
}

export class RemoveProduct{
  static readonly type = '[PRODUCT] Remove';
  constructor(public payload: string) {
  }
}
