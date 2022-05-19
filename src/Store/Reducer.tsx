import { Product } from "../Data/Product.Model";

export const reducer = (state: GlobalState, action: any) => {
  console.log(state);
  console.log(action.payload);
  switch (action.type) {
    case "add_to_cart":
      return {
        ...state,
        cart: { products: [...state.cart.products, action.payload.product] }
      }
    case "remove_from_cart":
      return {
        ...state,
        cart: { products: [...state.cart.products.filter(x => x.id != action.payload.product.id)] }
      }

    default:
      return state
  }
}

export const initialState = {
  cart: { products: [] as Product[] } as Cart
}

export interface GlobalState {
  cart: Cart;
}

export interface Cart {
  products: Product[];
}