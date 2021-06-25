import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Product } from './product.model';
import { AddProduct, RemoveProduct } from './shop.actions';
import {ProductService} from "../product.service";

export class ShopStateModel{

  public products: Product[] = [];

}

@State<ShopStateModel>({
  name: 'products',
  defaults: {
    products: []
  }
})

export class ShoppingCartState{
  @Selector()
  public static getProducts(state: ShopStateModel): Product[]{
    return state.products;
  }

  @Selector()
  public static addition(state: ShopStateModel): number {
    const values: number[] = state.products.map(({price}): number => price);
    return values.reduce((a , b): number => a + b, 0);
  }

  @Selector()
  public static amountOfItemsInCart(state: ShopStateModel): number {
    return state.products.length;
  }

  @Action(AddProduct)
  public add({getState, patchState}: StateContext<ShopStateModel>, {payload}: AddProduct): void {
    const state: ShopStateModel = getState();
    patchState({
      products: [...state.products, payload]
    });
  }

  @Action(RemoveProduct)
  public remove({getState, patchState}: StateContext<ShopStateModel>, { payload }: RemoveProduct): void {
    patchState({
      products: getState().products.filter(product => product.title !== payload)
    });
  }
}
