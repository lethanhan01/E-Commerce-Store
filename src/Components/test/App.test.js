import { render, screen } from '@testing-library/react';
import App from '../../App';

test('renders main Hair heading', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { name: /Hair/i });
  expect(headingElement).toBeInTheDocument();
});

test('renders navigation menu', () => {
  render(<App />);
  const navLinks = screen.getAllByText(/Home/i);
  expect(navLinks.length).toBeGreaterThan(0);
  
  const contactLinks = screen.getAllByText(/Contact/i);
  expect(contactLinks.length).toBeGreaterThan(0);
  
  const privacyLinks = screen.getAllByText(/Privacy/i);
  expect(privacyLinks.length).toBeGreaterThan(0);
});

test('renders shop shampoo button', () => {
  render(<App />);
  const shopButton = screen.getByText(/Shop Shampoo/i);
  expect(shopButton).toBeInTheDocument();
});
