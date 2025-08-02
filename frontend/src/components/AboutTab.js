import React from 'react';

function AboutTab() {
    return (
        <div className="tab-content about-tab">
            <section className="about-intro-section">
                <h1 className="about-title">About Our Vision</h1>
                <p className="about-description">
                    At our core, we believe in leveraging technology to create meaningful impact. Our journey began with a simple idea: to build solutions that are not just powerful, but also intuitive and accessible to everyone. We are driven by a passion for innovation and a commitment to excellence.
                </p>
            </section>

            <section className="mission-vision-section">
                <div className="mission-card">
                    <h2>Our Mission</h2>
                    <p>
                        To empower individuals and organizations with robust, secure, and user-friendly software that simplifies complex tasks and fosters growth.
                    </p>
                </div>
                <div className="vision-card">
                    <h2>Our Vision</h2>
                    <p>
                        To be a leading innovator in the tech industry, recognized for our commitment to quality, user experience, and positive societal impact.
                    </p>
                </div>
            </section>

            <section className="values-section">
                <h2 className="section-title">Our Core Values</h2>
                <div className="values-grid">
                    <div className="value-item">
                        <h3>Integrity</h3>
                        <p>Upholding the highest ethical standards in all our interactions.</p>
                    </div>
                    <div className="value-item">
                        <h3>Innovation</h3>
                        <p>Constantly exploring new ideas and technologies to stay ahead.</p>
                    </div>
                    <div className="value-item">
                        <h3>User-Centricity</h3>
                        <p>Designing with the user's needs and experience at the forefront.</p>
                    </div>
                    <div className="value-item">
                        <h3>Collaboration</h3>
                        <p>Fostering a supportive environment where ideas flourish together.</p>
                    </div>
                    <div className="value-item">
                        <h3>Excellence</h3>
                        <p>Striving for superior quality and continuous improvement in everything we do.</p>
                    </div>
                </div>
            </section>

            <section className="team-preview-section">
                <h2 className="section-title">Meet the Team</h2>
                <div className="team-grid">
                    <div className="team-member-card">
                        <img src="https://placehold.co/100x100/A78BFA/FFFFFF?text=Team+1" alt="Team Member 1" className="team-member-img" />
                        <h3>Jane Doe</h3>
                        <p>Lead Developer</p>
                    </div>
                    <div className="team-member-card">
                        <img src="https://placehold.co/100x100/60A5FA/FFFFFF?text=Team+2" alt="Team Member 2" className="team-member-img" />
                        <h3>John Smith</h3>
                        <p>UI/UX Designer</p>
                    </div>
                    <div className="team-member-card">
                        <img src="https://placehold.co/100x100/34D399/FFFFFF?text=Team+3" alt="Team Member 3" className="team-member-img" />
                        <h3>Emily White</h3>
                        <p>Project Manager</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutTab;