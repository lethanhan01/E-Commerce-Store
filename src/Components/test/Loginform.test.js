import { render, screen, fireEvent } from '@testing-library/react';
import Loginform from './Loginform';

describe('Loginform Component', () => {
  test('renders login form', () => {
    render(<Loginform />);
    
    const usernameInput = screen.getByLabelText(/Username/i);
    const passwordInput = screen.getByLabelText(/Password/i);
    const loginButton = screen.getByRole('button', { name: /Login/i });
    
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  test('shows success message with valid credentials', () => {
    render(<Loginform />);
    
    const usernameInput = screen.getByLabelText(/Username/i);
    const passwordInput = screen.getByLabelText(/Password/i);
    const loginButton = screen.getByRole('button', { name: /Login/i });
    
    fireEvent.change(usernameInput, { target: { value: 'Carlos' } });
    fireEvent.change(passwordInput, { target: { value: '1111' } });
    fireEvent.click(loginButton);
    
    const successMessage = screen.getByText(/You are successfully login the page/i);
    expect(successMessage).toBeInTheDocument();
  });

  test('shows error message with invalid credentials', () => {
    render(<Loginform />);
    
    const usernameInput = screen.getByLabelText(/Username/i);
    const passwordInput = screen.getByLabelText(/Password/i);
    const loginButton = screen.getByRole('button', { name: /Login/i });
    
    fireEvent.change(usernameInput, { target: { value: 'InvalidUser' } });
    fireEvent.change(passwordInput, { target: { value: '0000' } });
    fireEvent.click(loginButton);
    
    const errorMessage = screen.getByText(/Incorrect username or pin/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
