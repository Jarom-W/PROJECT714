import React, { useState } from 'react';
import './App.css';
import logo from "./assets/ERBLong.png"; // Your main logo
import ghlogo from "./assets/ghlogo.png"; // GitHub logo
import lilogo from "./assets/lilogo.png"; // LinkedIn logo

// Import new tab components
import HomeTab from './components/HomeTab';
import SignUpTab from './components/SignUpTab';
import AboutTab from './components/AboutTab';

function App() {
    // State to manage which tab is currently active
    const [activeTab, setActiveTab] = useState('home');

    // Function to render the content of the active tab
    const renderTabContent = () => {
        switch (activeTab) {
            case 'home':
                // Pass a function to HomeTab to allow it to switch to the Sign Up tab
                return <HomeTab onSignUpClick={() => setActiveTab('signUp')} />;
            case 'signUp':
                return <SignUpTab />;
            case 'about':
                return <AboutTab />;
            default:
                return <HomeTab onSignUpClick={() => setActiveTab('signUp')} />;
        }
    };

    return (
        <>
            <div className="App">
                {/* Main application header */}
                <header className="app-header">
                    <img className="main-logo" src={logo} alt="Application Logo" />
                    {/* Navigation for tabs */}
                    <nav className="tab-wrapper">
                        <button
                            className={`tab-btn ${activeTab === 'home' ? 'active' : ''}`}
                            onClick={() => setActiveTab('home')}
                        >
                            Home
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'signUp' ? 'active' : ''}`}
                            onClick={() => setActiveTab('signUp')}
                        >
                            Sign Up
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'about' ? 'active' : ''}`}
                            onClick={() => setActiveTab('about')}
                        >
                            About
                        </button>
                    </nav>
                </header>

                {/* Main content area where tab content will be rendered */}
                <main className="main-content-area">
                    {renderTabContent()}
                </main>
            </div>

            {/* Application footer */}
            <footer className="app-footer">
                <div className="footer-content">
                    <div className="footer-section about">
                        <h3>About Us</h3>
                        <p>
                            Our mission is to empower individuals and businesses with innovative solutions that drive growth and foster success.
                        </p>
                    </div>
                    <div className="footer-section links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#privacy-policy">Privacy Policy</a></li>
                            <li><a href="#terms-of-service">Terms of Service</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-section social">
                        <h3>Connect with me!</h3>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/jarom-wardwell-9b8121214/" target="_blank" rel="noopener noreferrer">
                                <img src={lilogo} alt="LinkedIn Logo" className="social-icon-img" />
                            </a>
                            <a href="https://github.com/Jarom-W" target="_blank" rel="noopener noreferrer">
                                <img src={ghlogo} alt="GitHub Logo" className="social-icon-img" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Jarom Wardwell. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}

export default App;
