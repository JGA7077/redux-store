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

  it('should return the same state object when called with an unknown action type', () => {
    const action = { type: 'UNKNOWN_ACTION', payload: emptyProductPayload };
    const result = cartReducer(initialState, action);
    expect(result).toBe(initialState);
  });

  it('should increase the quantity of cart counter with two differents products', () => {
    const firstProduct = {
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

    const firstProductAction = {
      type: CartActionTypes.ADD_PRODUCT,
      payload: firstProduct
    }
    const firstProductResult = cartReducer(initialState, firstProductAction);

    expect(firstProductResult.products.length).toBe(1);
    
    const secondProduct = {
      id: 2,
      title: 'Test Product 2',
      price: 30,
      description: 'Test Description 2',
      category: 'Test Category 2',
      image: 'test-image.jpg',
      rating: {
        rate: 3,
        count: 10
      },
      quantity: 1
    };
    const secondProductAction = {
      type: CartActionTypes.ADD_PRODUCT,
      payload: secondProduct
    }
    const secondProductResult = cartReducer(firstProductResult, secondProductAction);

    expect(secondProductResult.products.length).toBe(2);
  })

  it('should remove a product from cart when called REMOVE_PRODUCT action', () => {
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
    const addProductAction = {
      type: CartActionTypes.ADD_PRODUCT,
      payload: product
    };
    const addProductResult = cartReducer(initialState, addProductAction);

    expect(addProductResult.products.length).toBe(1);
    expect(addProductResult.products[0]).toEqual(product);

    const removeAction = {
      type: CartActionTypes.REMOVE_PRODUCT,
      payload: product
    };
    const removeProductResult = cartReducer(initialState, removeAction);
    expect(removeProductResult.products.length).toBe(0);
  })

  it('should return the same previous state when called REMOVE_PRODUCT action with wrong id', () =>{
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
    const addProductAction = {
      type: CartActionTypes.ADD_PRODUCT,
      payload: product
    };
    const addProductResult = cartReducer(initialState, addProductAction);

    expect(addProductResult.products.length).toBe(1);
    expect(addProductResult.products[0]).toEqual(product);

    const wrongProduct = {
      id: 2,
      title: 'Test Product 2',
      price: 30,
      description: 'Test Description 2',
      category: 'Test Category 2',
      image: 'test-image.jpg',
      rating: {
        rate: 3,
        count: 10
      },
      quantity: 1
    };

    const removeAction = {
      type: CartActionTypes.REMOVE_PRODUCT,
      payload: wrongProduct
    }
    const removeProductResult = cartReducer(addProductResult, removeAction);
    expect(removeProductResult.products.length).toBe(1);
  })
})
