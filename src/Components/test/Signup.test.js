import { render, screen, fireEvent } from '@testing-library/react';
import Signup from '../Signup';

describe('Signup Component', () => {
  test('renders signup form with all fields', () => {
    render(<Signup />);
    
    const heading = screen.getByText(/Create Your Account/i);
    const firstNameInput = screen.getByLabelText(/First Name/i);
    const lastNameInput = screen.getByLabelText(/Last Name/i);
    const emailInput = screen.getByLabelText(/Email Address/i);
    const usernameInput = screen.getByLabelText(/Username/i);
    const passwordInput = screen.getByLabelText(/^Password/i);
    const confirmPasswordInput = screen.getByLabelText(/Confirm Password/i);
    const phoneInput = screen.getByLabelText(/Phone Number/i);
    const termsCheckbox = screen.getByRole('checkbox');
    const submitButton = screen.getByRole('button', { name: /Create Account/i });
    
    expect(heading).toBeInTheDocument();
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(confirmPasswordInput).toBeInTheDocument();
    expect(phoneInput).toBeInTheDocument();
    expect(termsCheckbox).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('shows validation errors for empty required fields', () => {
    render(<Signup />);
    
    const submitButton = screen.getByRole('button', { name: /Create Account/i });
    fireEvent.click(submitButton);
    
    expect(screen.getByText(/First name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Last name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Username is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Password is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Phone number is required/i)).toBeInTheDocument();
    expect(screen.getByText(/You must agree to the terms/i)).toBeInTheDocument();
  });

  test('validates email format', () => {
    render(<Signup />);
    
    const emailInput = screen.getByLabelText(/Email Address/i);
    const submitButton = screen.getByRole('button', { name: /Create Account/i });
    
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.click(submitButton);
    
    expect(screen.getByText(/Email is invalid/i)).toBeInTheDocument();
  });

  test('validates password confirmation', () => {
    render(<Signup />);
    
    const passwordInput = screen.getByLabelText(/^Password/i);
    const confirmPasswordInput = screen.getByLabelText(/Confirm Password/i);
    const submitButton = screen.getByRole('button', { name: /Create Account/i });
    
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'different123' } });
    fireEvent.click(submitButton);
    
    expect(screen.getByText(/Passwords do not match/i)).toBeInTheDocument();
  });

  test('shows success message on valid form submission', () => {
    render(<Signup />);
    
    // Fill out all required fields
    fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'johndoe' } });
    fireEvent.change(screen.getByLabelText(/^Password/i), { target: { value: 'password123' } });
    fireEvent.change(screen.getByLabelText(/Confirm Password/i), { target: { value: 'password123' } });
    fireEvent.change(screen.getByLabelText(/Phone Number/i), { target: { value: '1234567890' } });
    fireEvent.click(screen.getByRole('checkbox'));
    
    const submitButton = screen.getByRole('button', { name: /Create Account/i });
    fireEvent.click(submitButton);
    
    expect(screen.getByText(/Account created successfully/i)).toBeInTheDocument();
  });

  test('renders login link', () => {
    render(<Signup />);
    
    const loginLink = screen.getByText(/Sign in here/i);
    expect(loginLink).toBeInTheDocument();
    expect(loginLink.closest('a')).toHaveAttribute('href', '/loginform');
  });
});
