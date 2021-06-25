import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Product } from './product.model';
import { AddProduct, RemoveProduct } from './shop.actions';

export class ShopStateModel{

  products: Product[] = [];

}

@State<ShopStateModel>({
  name: 'products',
  defaults: {
    products: []
  }
})

export class ShoppingCartState{
  @Selector()
  static getProducts(state: ShopStateModel){
    return state.products;
  }

  @Selector()
  static addition(state: ShopStateModel){
    const values = state.products.map(({price})=> price);
    return values.reduce((a , b) => a + b, 0);
  }

  @Selector()
  static amountOfItemsInCart(state: ShopStateModel){
    return state.products.length;
  }

  @Action(AddProduct)
  public add({getState, patchState}: StateContext<ShopStateModel>, {payload}: AddProduct){
    const state = getState();
    patchState({
      products: [...state.products, payload]
    });
  }
  @Action(RemoveProduct)
  public remove({getState, patchState}: StateContext<ShopStateModel>, { payload}: RemoveProduct){
    patchState({
      products: getState().products.filter(a => a.title !== payload)
    });
  }
}
