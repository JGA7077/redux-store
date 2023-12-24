import { RootReducer } from "../root-reducer";

export const selectProductsCount = (rootReducer: RootReducer) => {
  return rootReducer.cartReducer.products.reduce((acc, curr) => {
    return acc += curr.quantity
  }, 0)
}