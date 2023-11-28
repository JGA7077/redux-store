import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '.';

describe('Header Component', () => {
  it('should render header logo', () => {
    render(<Header />);

    screen.getByText('Redux Store');
  });

  it('should render a header element with a background color', () => {
    render(<Header />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveClass('bg-slate-950');
  });

  it('should render a container element with a maximum width and flex display', () => {
    render(<Header />);
    const containerElement = screen.getByRole('banner').querySelector('.container');

    expect(containerElement).toBeInTheDocument();
    expect(containerElement).toHaveClass('mx-auto');
    expect(containerElement).toHaveClass('flex');
    expect(containerElement).toHaveClass('justify-between');
  });

  // The cart icon image fails to load and displays an alt text instead.
  it('should display alt text when cart icon image fails to load', () => {
    render(<Header />);
    const imgElement = screen.getByAltText('Ícone de sacola de compras');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', '/cart-icon.png');
    expect(imgElement).toHaveAttribute('alt', 'Ícone de sacola de compras');
  });
  
})
