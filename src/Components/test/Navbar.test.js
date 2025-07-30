import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';

const NavbarWithRouter = () => (
  <BrowserRouter>
    <Navbar />
  </BrowserRouter>
);

describe('Navbar Component', () => {
  test('renders navbar with logo', () => {
    render(<NavbarWithRouter />);
    
    const logo = screen.getByAltText('');
    expect(logo).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(<NavbarWithRouter />);
    
    const homeLinks = screen.getAllByText(/Home/i);
    const contactLinks = screen.getAllByText(/Contact/i);
    const privacyLinks = screen.getAllByText(/Privacy/i);
    const loginLinks = screen.getAllByText(/Login/i);
    const signupLinks = screen.getAllByText(/Signup/i);
    
    expect(homeLinks.length).toBeGreaterThan(0);
    expect(contactLinks.length).toBeGreaterThan(0);
    expect(privacyLinks.length).toBeGreaterThan(0);
    expect(loginLinks.length).toBeGreaterThan(0);
    expect(signupLinks.length).toBeGreaterThan(0);
  });

  test('renders search icons', () => {
    render(<NavbarWithRouter />);
    
    const searchIcons = screen.getAllByTestId('SearchIcon');
    expect(searchIcons.length).toBeGreaterThan(0);
  });

  test('renders shopping bag icon', () => {
    render(<NavbarWithRouter />);
    
    const bagIcon = screen.getByTestId('LocalMallIcon');
    expect(bagIcon).toBeInTheDocument();
  });
});
