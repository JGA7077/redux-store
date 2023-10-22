import { render, screen } from '@testing-library/react';
import Header from '.';

describe('Header Component', () => {
  it('should render header logo', () => {
    render(<Header />);

    screen.getByText('Redux Store');
  });
})
