import { ProductItem } from "@/components/ProductsList";
import CartActionTypes from "./action-types";

export const initialState = {
  products: [],
  productsTotalPrice: 0
};

interface State {
  products: ProductItem[];
  productsTotalPrice: number;
}

export interface Action {
  type: string;
  payload: ProductItem;
}

const cartReducer = (state:State = initialState, action: Action) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      const productIsOnCart = state.products.some(
        (product: ProductItem) => product.id === action.payload.id
      )

      if (productIsOnCart) {
        return {
          ...state,
          products: state.products.map((product: ProductItem) =>
            product.id === action.payload.id
              ? {...product, quantity: product?.quantity + 1}
              : product
        )}
      }

      return {
        ...state,
        products: [...state.products, {...action.payload, quantity: 1}]
      }
    case CartActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.payload.id)
      }
    default:
      return state
  }
}

export default cartReducer;