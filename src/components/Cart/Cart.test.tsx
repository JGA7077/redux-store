import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Cart from ".";

const cartReducerInitialState = {
  cartReducer: {
    products: [],
    productsTotalPrice: 0
  }
};

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

const mockStore = configureStore([]);
const store = mockStore(cartReducerInitialState)


describe('Cart Component', () => {
  const isCartVisible = true;
  const setIsCartVisible = jest.fn();

  it('should render cart component', () => {
    render(
      <Provider store={store}>
        <Cart
          isCartVisible={isCartVisible}
          setIsCartVisible={setIsCartVisible}
          products={[]}
          productsTotalPrice={0}
          productsCount={0}
        />
      </Provider>
    );

    screen.getByText('Meu carrinho');
    setIsCartVisible(false);
  });

  it('should show empty cart message when there isnt products on cart', () => {
    render(
      <Provider store={store}>
        <Cart
          isCartVisible={isCartVisible}
          setIsCartVisible={setIsCartVisible}
          products={[]}
          productsTotalPrice={0}
          productsCount={0}
        />
      </Provider>
    );

    screen.getByText('Seu Carrinho está vazio');
    setIsCartVisible(false);
  })

  it('should hide empty cart message when cart has products', () => {
    // mocking product
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

    render(
      <Provider store={store}>
        <Cart
          isCartVisible={isCartVisible}
          setIsCartVisible={setIsCartVisible}
          products={[product]}
          productsTotalPrice={0}
          productsCount={0}
        />
      </Provider>
    );

    const emptyCartText = screen.queryByText('Seu Carrinho está vazio');
    expect(emptyCartText).toBeNull();
    setIsCartVisible(false);
  })
})