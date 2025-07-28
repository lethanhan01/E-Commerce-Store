import { render, screen } from '@testing-library/react';
import Privacy from './Privacy';

describe('Privacy Component', () => {
  test('renders privacy policy page with main heading', () => {
    render(<Privacy />);
    
    const heading = screen.getByText(/Privacy Policy & Terms of Service/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders last updated date', () => {
    render(<Privacy />);
    
    const lastUpdated = screen.getByText(/Last updated:/i);
    expect(lastUpdated).toBeInTheDocument();
  });

  test('renders all main sections', () => {
    render(<Privacy />);
    
    expect(screen.getByText(/1\. Information We Collect/i)).toBeInTheDocument();
    expect(screen.getByText(/2\. How We Use Your Information/i)).toBeInTheDocument();
    expect(screen.getByText(/3\. Information Sharing/i)).toBeInTheDocument();
    expect(screen.getByText(/4\. Data Security/i)).toBeInTheDocument();
    expect(screen.getByText(/5\. Your Rights/i)).toBeInTheDocument();
    expect(screen.getByText(/6\. Terms of Service/i)).toBeInTheDocument();
    expect(screen.getByText(/7\. Cookies/i)).toBeInTheDocument();
    expect(screen.getByText(/8\. Changes to This Policy/i)).toBeInTheDocument();
    expect(screen.getByText(/9\. Contact Us/i)).toBeInTheDocument();
  });

  test('renders contact information', () => {
    render(<Privacy />);
    
    expect(screen.getByText(/privacy@refresh-skincare\.com/i)).toBeInTheDocument();
    expect(screen.getByText(/1-800-REFRESH/i)).toBeInTheDocument();
    expect(screen.getByText(/123 Beauty Boulevard/i)).toBeInTheDocument();
  });

  test('renders terms of service subsections', () => {
    render(<Privacy />);
    
    expect(screen.getByText(/Acceptance of Terms/i)).toBeInTheDocument();
    expect(screen.getByText(/Product Information/i)).toBeInTheDocument();
    expect(screen.getByText(/Returns and Refunds/i)).toBeInTheDocument();
    expect(screen.getByText(/Limitation of Liability/i)).toBeInTheDocument();
  });

  test('renders policy footer', () => {
    render(<Privacy />);
    
    const footerText = screen.getByText(/By using our services, you acknowledge/i);
    expect(footerText).toBeInTheDocument();
  });
});
