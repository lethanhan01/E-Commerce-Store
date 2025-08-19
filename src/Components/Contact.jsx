import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: 'general'
    });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        
        if (Object.keys(formErrors).length === 0) {
            setIsSubmitting(true);
            // Simulate API call
            setTimeout(() => {
                setSuccess('Thank you for your message! We will get back to you within 24 hours.');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: '',
                    inquiryType: 'general'
                });
                setErrors({});
                setIsSubmitting(false);
            }, 1500);
        } else {
            setErrors(formErrors);
            setSuccess('');
        }
    };

    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1>Get in Touch</h1>
                <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            </div>

            <div className="contact-content">
                <div className="contact-info">
                    <h2>Contact Information</h2>
                    
                    <div className="info-item">
                        <h3>📍 Address</h3>
                        <p>1 Dai Co Viet<br /> Hanoi University of Science and Technology<br />Bach Mai, Hai Ba Trung, Hanoi <br />Vietnam</p>
                    </div>

                    <div className="info-item">
                        <h3>📞 Phone</h3>
                        <p>Customer Service: +84-REFRESH (+84-865-797-312)<br />
                        Business Hours: Monday - Friday, 9 AM - 6 PM EST</p>
                    </div>

                    <div className="info-item">
                        <h3>📧 Email</h3>
                        <p>General Inquiries: An.LT235631@sis.hust.edu <br />
                        Customer Support: An.LT235631@sis.hust.edu <br />
                        Business Partnerships: An.LT235631@sis.hust.edu </p>
                    </div>

                    <div className="info-item">
                        <h3>🕒 Business Hours</h3>
                        <p>Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                        Saturday: 10:00 AM - 4:00 PM EST<br />
                        Sunday: Closed</p>
                    </div>

                    <div className="social-media">
                        <h3>Follow Us</h3>
                        <div className="social-links">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">📘 Facebook</a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📷 Instagram</a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">🐦 Twitter</a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">🎥 YouTube</a>
                        </div>
                    </div>
                </div>

                <div className="contact-form-section">
                    <h2>Send us a Message</h2>
                    
                    {success && <div className="success-message">{success}</div>}
                    
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="inquiryType">Type of Inquiry</label>
                            <select
                                id="inquiryType"
                                name="inquiryType"
                                value={formData.inquiryType}
                                onChange={handleChange}
                            >
                                <option value="general">General Question</option>
                                <option value="product">Product Information</option>
                                <option value="order">Order Support</option>
                                <option value="return">Returns & Exchanges</option>
                                <option value="partnership">Business Partnership</option>
                                <option value="press">Press & Media</option>
                            </select>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Full Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={errors.name ? 'error' : ''}
                                />
                                {errors.name && <span className="error-text">{errors.name}</span>}
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
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number (Optional)</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="(123) 456-7890"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject *</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className={errors.subject ? 'error' : ''}
                                placeholder="Brief description of your inquiry"
                            />
                            {errors.subject && <span className="error-text">{errors.subject}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message *</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="6"
                                value={formData.message}
                                onChange={handleChange}
                                className={errors.message ? 'error' : ''}
                                placeholder="Please provide details about your inquiry..."
                            ></textarea>
                            {errors.message && <span className="error-text">{errors.message}</span>}
                        </div>

                        <button 
                            type="submit" 
                            className="submit-btn"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>

            <div className="faq-section">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-grid">
                    <div className="faq-item">
                        <h3>How long does shipping take?</h3>
                        <p>Standard shipping takes 3-5 business days. Express shipping is available for 1-2 day delivery.</p>
                    </div>
                    <div className="faq-item">
                        <h3>What is your return policy?</h3>
                        <p>We offer a 30-day return policy for unopened products in original packaging.</p>
                    </div>
                    <div className="faq-item">
                        <h3>Are your products cruelty-free?</h3>
                        <p>Yes, all our products are cruelty-free and never tested on animals.</p>
                    </div>
                    <div className="faq-item">
                        <h3>Do you offer international shipping?</h3>
                        <p>Currently we ship within the United States. International shipping will be available soon.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;