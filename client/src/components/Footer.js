import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__search">
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="footer__search-bar">
            <input type="email" placeholder="Email address" />
            <button className="footer__search-button">Get Started</button>
          </div>
        </div>
        <p>Questions? Call 000-800-919-1694</p>
        <div className="footer__links">
          <div className="footer__link-column">
            <a href="/">FAQ</a>
            <a href="/">Investor Relations</a>
            <a href="/">Privacy</a>
            <a href="/">Speed Test</a>
          </div>
          <div className="footer__link-column">
            <a href="/">Help Centre</a>
            <a href="/">Jobs</a>
            <a href="/">Cookie Preferences</a>
            <a href="/">Legal Notices</a>
          </div>
          <div className="footer__link-column">
            <a href="/">Account</a>
            <a href="/">Ways to Watch</a>
            <a href="/">Corporate Information</a>
            <a href="/">Only on Netflix</a>
          </div>
          <div className="footer__link-column">
            <a href="/">Media Centre</a>
            <a href="/">Terms of Use</a>
            <a href="/">Contact Us</a>
          </div>
        </div>
        <p className="footer__country">Netflix India</p>
      </div>
    </footer>
  );
};

export default Footer; 