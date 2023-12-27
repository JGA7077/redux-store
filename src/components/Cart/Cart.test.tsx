import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Cart from ".";
import Header from '../Header';

const cartReducerInitialState = {
  cartReducer: {
    products: [],
    productsTotalPrice: 0
  }
};

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

    screen.getByText('My Cart');
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

    screen.getByText('Your cart is empty');
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

    const emptyCartText = screen.queryByText('Your cart is empty');
    expect(emptyCartText).toBeNull();
    setIsCartVisible(false);
  })

  it('should show minicart on button click', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    const btnOpenCart = screen.getByRole('img');
    expect(btnOpenCart).toHaveAttribute('alt', 'Ícone de sacola de compras')
    const minicartContainer = screen.getByTestId("minicart-container");
    expect(minicartContainer).toHaveClass('right-[-1000%]')
    
    fireEvent.click(btnOpenCart);

    expect(minicartContainer).toHaveClass('right-0')
  })

  it('should hide minicart on close button click', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    const btnOpenCart = screen.getByRole('img');
    expect(btnOpenCart).toHaveAttribute('alt', 'Ícone de sacola de compras');

    const minicartContainer = screen.getByTestId("minicart-container");

    const mbtnCloseCart = screen.getByRole('button');
    expect(mbtnCloseCart).toHaveClass('bg-white rounded-full focus:ring-indigo-500');
    
    fireEvent.click(btnOpenCart);
    fireEvent.click(mbtnCloseCart);

    expect(minicartContainer).toHaveClass('right-[-1000%]');
  })
})