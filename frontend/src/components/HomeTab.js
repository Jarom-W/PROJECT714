import React from 'react';

function HomeTab({ onSignUpClick }) {
    return (
        <div className="tab-content home-tab">
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">Welcome to Our Innovative Platform</h1>
                    <p className="hero-subtitle">
                        Discover cutting-edge solutions designed to streamline your workflow and boost productivity.
                    </p>
                    <button className="hero-cta-button" onClick={onSignUpClick}>Get Started Today</button>
                </div>
                <div className="hero-image-container">
                    {/* The main logo image will be styled to fit here */}
                    {/* This is a placeholder for the visual representation of the hero image */}
                </div>
            </section>

            <section className="features-section">
                <h2 className="section-title">Key Features</h2>
                <div className="features-grid">
                    <div className="feature-item">
                        <h3>🚀 High Performance</h3>
                        <p>Experience lightning-fast operations and seamless user interactions.</p>
                    </div>
                    <div className="feature-item">
                        <h3>🔒 Secure & Reliable</h3>
                        <p>Your data is protected with industry-leading security measures and robust architecture.</p>
                    </div>
                    <div className="feature-item">
                        <h3>💡 Intuitive Design</h3>
                        <p>Enjoy a user-friendly interface that makes complex tasks simple and efficient.</p>
                    </div>
                    <div className="feature-item">
                        <h3>📈 Scalable Solutions</h3>
                        <p>Our platform grows with your needs, ensuring consistent performance at any scale.</p>
                    </div>
                </div>
            </section>

            <section className="about-us-preview-section">
                <h2 className="section-title">About Us</h2>
                <p>
                    We are a dedicated team passionate about creating impactful software. Our commitment to quality and innovation drives everything we do. Learn more about our mission and values on the About tab.
                </p>
                <button className="secondary-cta-button" onClick={() => onSignUpClick()}>Learn More About Us</button>
            </section>
        </div>
    );
}

export default HomeTab;
