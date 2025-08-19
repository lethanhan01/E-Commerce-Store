import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        phone: '',
        agreeToTerms: false
    });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.username.trim()) {
            newErrors.username = 'Username is required';
        } else if (formData.username.length < 3) {
            newErrors.username = 'Username must be at least 3 characters';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ''))) {
            newErrors.phone = 'Phone number must be at least 10 digits';
        }

        if (!formData.agreeToTerms) {
            newErrors.agreeToTerms = 'You must agree to the terms and conditions';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        
        if (Object.keys(formErrors).length === 0) {
            // Simulate successful registration
            setSuccess('Account created successfully! You can now login.');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                username: '',
                password: '',
                confirmPassword: '',
                phone: '',
                agreeToTerms: false
            });
            setErrors({});
        } else {
            setErrors(formErrors);
            setSuccess('');
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-form-wrapper">
                <h2>Create Your Account</h2>
                <p className="signup-subtitle">Join us and start your journey with premium skincare products</p>
                
                {success && <div className="success-message">{success}</div>}
                
                <form onSubmit={handleSubmit} className="signup-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="firstName">First Name *</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className={errors.firstName ? 'error' : ''}
                            />
                            {errors.firstName && <span className="error-text">{errors.firstName}</span>}
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name *</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className={errors.lastName ? 'error' : ''}
                            />
                            {errors.lastName && <span className="error-text">{errors.lastName}</span>}
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? 'error' : ''}
                        />
                        {errors.email && <span className="error-text">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="username">Username *</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className={errors.username ? 'error' : ''}
                        />
                        {errors.username && <span className="error-text">{errors.username}</span>}
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="password">Password *</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className={errors.password ? 'error' : ''}
                            />
                            {errors.password && <span className="error-text">{errors.password}</span>}
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password *</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className={errors.confirmPassword ? 'error' : ''}
                            />
                            {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={errors.phone ? 'error' : ''}
                            placeholder="(123) 456-7890"
                        />
                        {errors.phone && <span className="error-text">{errors.phone}</span>}
                    </div>

                    <div className="form-group checkbox-group">
                        <label className="checkbox-label">
                            <input
                                type="checkbox"
                                name="agreeToTerms"
                                checked={formData.agreeToTerms}
                                onChange={handleChange}
                            />
                            <span className="checkmark"></span>
                            I agree to the <a href="/privacy">Terms and Conditions</a> and <a href="/privacy">Privacy Policy</a> *
                        </label>
                        {errors.agreeToTerms && <span className="error-text">{errors.agreeToTerms}</span>}
                    </div>

                    <button type="submit" className="signup-btn">
                        Create Account
                    </button>
                </form>

                <div className="login-link">
                    Already have an account? <a href="/loginform">Sign in here</a>
                </div>
            </div>
        </div>
    );
};

export default Signup;