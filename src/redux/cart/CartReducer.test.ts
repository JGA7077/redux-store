import CartActionTypes from "./action-types";
import cartReducer, {initialState} from "./reducer"

const emptyProductPayload = {
  id: 0,
  title: "",
  price: 0,
  description: "",
  category: "",
  image: "",
  rating: {
    rate: 0,
    count: 0
  },
  quantity: 0
}

describe('Cart Reducer', () => {
  it('should return the initial state when called without arguments', () => {
    const result = cartReducer(undefined, {type: '', payload: emptyProductPayload});

    expect(result).toEqual(initialState)
  })

  it('should add a new product to cart when called with ADD_PRODUCT action type', () => {
    const product = {
      id: 1,
      title: 'Test Product',
      price: 10,
      description: 'Test Description',
      category: 'Test Category',
      image: 'test-image.jpg',
      rating: {
        rate: 4.5,
        count: 10
      },
      quantity: 1
    };

    const action = {
      type: CartActionTypes.ADD_PRODUCT,
      payload: product
    };
    const result = cartReducer(initialState, action);

    console.log('initialState ==>', initialState);

    expect(result.products.length).toBe(1);
    expect(result.products[0]).toEqual(product);
  })

  it('should increase the quantity of a product that is already on the cart', () => {
    const product = {
      id: 1,
      title: 'Test Product',
      price: 10,
      description: 'Test Description',
      category: 'Test Category',
      image: 'test-image.jpg',
      rating: {
        rate: 4.5,
        count: 10
      },
      quantity: 1
    };

    const initialStateWithProduct = {
      products: [product],
      productsTotalPrice: 10
    }
    const action = {
      type: CartActionTypes.ADD_PRODUCT,
      payload: product
    }
    const result = cartReducer(initialStateWithProduct, action);

    expect(result.products.length).toBe(1);
    expect(result.products[0].quantity).toBe(2);
  })
})
