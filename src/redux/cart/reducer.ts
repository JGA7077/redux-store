const initialState = {
  products: []
}

export interface Action {
  type: string;
  // payload: ProductItemProps;
}

const cartReducer = (state = initialState, action: Action) => {
  return state;
}

export default cartReducer;