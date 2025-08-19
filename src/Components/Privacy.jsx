import React from 'react';
import './Privacy.css';

const Privacy = () => {
    return (
        <div className="privacy-container">
            <div className="privacy-content">
                <h1>Privacy Policy & Terms of Service</h1>
                <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>

                <section className="privacy-section">
                    <h2>1. Information We Collect</h2>
                    <p>
                        We collect information you provide directly to us, such as when you create an account, 
                        make a purchase, or contact us for support. This may include:
                    </p>
                    <ul>
                        <li>Personal information (name, email address, phone number)</li>
                        <li>Payment information (processed securely through third-party payment processors)</li>
                        <li>Shipping and billing addresses</li>
                        <li>Communication preferences</li>
                        <li>Product reviews and feedback</li>
                    </ul>
                </section>

                <section className="privacy-section">
                    <h2>2. How We Use Your Information </h2>
                    
                    <p>
                        We use the information we collect to:
                    </p>
                    
                    <ul>
                        <li>Process and fulfill your orders</li>
                        <li>Provide customer service and support</li>
                        <li>Send you marketing communications (with your consent)</li>
                        <li>Improve our products and services</li>
                        <li>Comply with legal obligations</li>
                        <li>Prevent fraud and ensure security</li>
                    </ul>
                </section>

                <section className="privacy-section">
                    <h2>3. Information Sharing</h2>
                    <p>
                        We do not sell, trade, or rent your personal information to third parties. 
                        We may share your information in the following circumstances:
                    </p>
                    <ul>
                        <li>With service providers who assist us in operating our business</li>
                        <li>When required by law or to protect our rights</li>
                        <li>In connection with a business transfer or acquisition</li>
                        <li>With your explicit consent</li>
                    </ul>
                </section>

                <section className="privacy-section">
                    <h2>4. Data Security</h2>
                    <p>
                        We implement appropriate security measures to protect your personal information 
                        against unauthorized access, alteration, disclosure, or destruction. However, 
                        no method of transmission over the internet is 100% secure.
                    </p>
                </section>

                <section className="privacy-section">
                    <h2>5. Your Rights</h2>
                    <p>
                        You have the right to:
                    </p>
                    <ul>
                        <li>Access and update your personal information</li>
                        <li>Request deletion of your account and data</li>
                        <li>Opt-out of marketing communications</li>
                        <li>Request a copy of your data</li>
                        <li>File a complaint with supervisory authorities</li>
                    </ul>
                </section>

                <section className="privacy-section">
                    <h2>6. Terms of Service</h2>
                    
                    <h3>Acceptance of Terms</h3>
                    <p>
                        By accessing and using our website, you accept and agree to be bound by 
                        the terms and provision of this agreement.
                    </p>
                    
                    <h3>Product Information</h3>
                    <p>
                        We strive to provide accurate product descriptions and pricing. However, 
                        we do not warrant that product descriptions or other content is accurate, 
                        complete, reliable, current, or error-free.
                    </p>
                    
                    <h3>Returns and Refunds</h3>
                    <p>
                        We offer a 30-day return policy for unopened products. Refunds will be 
                        processed within 5-10 business days after we receive your return.
                    </p>
                    
                    <h3>Limitation of Liability</h3>
                    <p>
                        Our liability is limited to the maximum extent permitted by law. We are 
                        not liable for any indirect, incidental, or consequential damages.
                    </p>
                </section>

                <section className="privacy-section">
                    <h2>7. Cookies</h2>
                    <p>
                        We use cookies to enhance your browsing experience, analyze site traffic, 
                        and personalize content. You can control cookie preferences through your 
                        browser settings.
                    </p>
                </section>

                <section className="privacy-section">
                    <h2>8. Changes to This Policy</h2>
                    <p>
                        We may update this privacy policy from time to time. We will notify you 
                        of any changes by posting the new policy on this page and updating the 
                        "last updated" date.
                    </p>
                </section>

                <section className="privacy-section">
                    <h2>9. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy or our Terms of Service, 
                        please contact us:
                    </p>
                    <div className="contact-info">
                        <p><strong>Email:</strong> An.LT235631@sis.hust.edu.vn</p>
                        <p><strong>Phone:</strong>  (+84)865-797-312</p>
                        <p><strong>Address:</strong> 1, DaiCoViet, BachMai, HaiBaTrung, Vietnam</p>
                    </div>
                </section>

                <div className="policy-footer">
                    <p>
                        By using our services, you acknowledge that you have read and understood 
                        this Privacy Policy and agree to our Terms of Service.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Privacy;