import CartActionTypes from "./action-types";
import { ProductItem } from "@/components/ProductsList";

export const addProductToCart = (payload: ProductItem) => ({
  type: CartActionTypes.ADD_PRODUCT,
  payload
})

export const removeProductFromCart = (payload: ProductItem) => ({
  type: CartActionTypes.REMOVE_PRODUCT,
  payload: {
    id: payload.id
  }
})