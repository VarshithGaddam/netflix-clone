import React, { useEffect, useState } from 'react';
import './Header.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header__left">
        <Link to="/" className="header__logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
          />
        </Link>
        <nav className="header__nav">
          <Link to="/browse" className="header__navItem">Browse</Link>
        </nav>
      </div>
      <div className="header__right">
        <Link to="/login" className="header__login">Login</Link>
      </div>
    </header>
  );
};

export default Header;