import { render, screen } from '@testing-library/react';
import Home from '../src/app/page';

test('renders home page', () => {
  render(<Home />);
  const heading = screen.getByRole('heading', { name: /welcome/i });
  expect(heading).toBeInTheDocument();
});
