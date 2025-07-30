import { render, screen, fireEvent } from '@testing-library/react';
import Contact from '../Contact';

describe('Contact Component', () => {
  test('renders contact page with header', () => {
    render(<Contact />);
    
    const heading = screen.getByText(/Get in Touch/i);
    const subtitle = screen.getByText(/We'd love to hear from you/i);
    
    expect(heading).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });

  test('renders contact form with all fields', () => {
    render(<Contact />);
    
    const nameInput = screen.getByLabelText(/Full Name/i);
    const emailInput = screen.getByLabelText(/Email Address/i);
    const phoneInput = screen.getByLabelText(/Phone Number/i);
    const subjectInput = screen.getByLabelText(/Subject/i);
    const messageInput = screen.getByLabelText(/Message/i);
    const submitButton = screen.getByRole('button', { name: /Send Message/i });
    
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(phoneInput).toBeInTheDocument();
    expect(subjectInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('shows validation errors for empty required fields', () => {
    render(<Contact />);
    
    const submitButton = screen.getByRole('button', { name: /Send Message/i });
    fireEvent.click(submitButton);
    
    expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Subject is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Message is required/i)).toBeInTheDocument();
  });

  test('renders contact information section', () => {
    render(<Contact />);
    
    expect(screen.getByText(/Contact Information/i)).toBeInTheDocument();
    expect(screen.getByText(/123 Beauty Boulevard/i)).toBeInTheDocument();
    expect(screen.getByText(/1-800-REFRESH/i)).toBeInTheDocument();
    expect(screen.getByText(/info@refresh-skincare.com/i)).toBeInTheDocument();
  });

  test('renders FAQ section', () => {
    render(<Contact />);
    
    expect(screen.getByText(/Frequently Asked Questions/i)).toBeInTheDocument();
    expect(screen.getByText(/How long does shipping take\?/i)).toBeInTheDocument();
    expect(screen.getByText(/What is your return policy\?/i)).toBeInTheDocument();
  });
});
