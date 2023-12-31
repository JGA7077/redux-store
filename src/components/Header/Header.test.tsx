import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Header from '.';

const cartReducerInitialState = {
  cartReducer: {
    products: [],
    productsTotalPrice: 0
  }
};

const mockStore = configureStore([]);
const store = mockStore(cartReducerInitialState)

describe('Header Component', () => {
  it('should render header logo', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    screen.getByText('Redux Store');
  });

  it('should render a header element with a background color', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    const headerElement = screen.getByTestId('main-header');
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveClass('bg-slate-950');
  });

  it('should render a container element with a maximum width and flex display', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    const containerElement = screen.getByTestId('header-content');

    expect(containerElement).toBeInTheDocument();
    expect(containerElement).toHaveClass('mx-auto');
    expect(containerElement).toHaveClass('flex');
    expect(containerElement).toHaveClass('justify-between');
  });

  // The cart icon image fails to load and displays an alt text instead.
  it('should display alt text when cart icon image fails to load', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    const imgElement = screen.getByAltText('Ícone de sacola de compras');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', '/cart-icon.png');
    expect(imgElement).toHaveAttribute('alt', 'Ícone de sacola de compras');
  });
  
})
