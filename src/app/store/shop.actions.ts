import { Product } from './product.model';

export class AddProduct {
  public static readonly type = '[PRODUCT] Add';
  constructor(public payload: Product) {
  }
}

export class RemoveProduct{
  public static readonly type = '[PRODUCT] Remove';
  constructor(public payload: string) {
  }
}
