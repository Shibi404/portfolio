import React from 'react';
import '../styles/contact.css';

function Contact() {
  return (
    <section className="contact-section container">
      <div className="contact-header">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-subtitle">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
      </div>

      <div className="contact-cards-container">
        {/* Email Card */}
        <a href="mailto:your.email@example.com" className="contact-card email-card">
          <div className="contact-icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <h2 className="contact-card-title">Email</h2>
          <p className="contact-card-info">shibikrishna10@gmail.com</p>
          <span className="contact-action">Write an email</span>
        </a>

        {/* LinkedIn Card */}
        <a href="https://linkedin.com/in/shibi-krishna" target="_blank" rel="noopener noreferrer" className="contact-card linkedin-card">
          <div className="contact-icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </div>
          <h2 className="contact-card-title">LinkedIn</h2>
          <p className="contact-card-info">Connect professionally</p>
          <span className="contact-action">View Profile</span>
        </a>

        {/* GitHub Card */}
        <a href="https://github.com/shibi404" target="_blank" rel="noopener noreferrer" className="contact-card github-card">
          <div className="contact-icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </div>
          <h2 className="contact-card-title">GitHub</h2>
          <p className="contact-card-info">Checkout my code</p>
          <span className="contact-action">View Repositories</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
