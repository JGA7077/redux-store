import CartActionTypes from "./action-types";
import { ProductItem } from "@/components/ProductsList";

export const addProductToCart = (payload: ProductItem) => ({
  type: CartActionTypes.ADD_PRODUCT,
  payload
})