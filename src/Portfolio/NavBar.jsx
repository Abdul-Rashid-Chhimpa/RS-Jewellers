// Navigation.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Navbar.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  // Navigation handlers with menu close on mobile
  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false); // Close mobile menu after clicking a link
  };

  return (
    <>
      <div className="navigation">
        {/* Logo - Make it clickable to go home */}
        <div className="logo" onClick={() => handleNavigate('/')}>
          <img src="/OIP.webp" alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <div className="nav-links">
          <a onClick={() => handleNavigate('/')}>Home</a>
          <a onClick={() => handleNavigate('/products')}>Products</a>
          <a onClick={() => handleNavigate('/about')}>About</a>
          <a onClick={() => handleNavigate('/contact')}>Contact</a>
        </div>

        {/* Hamburger Icon */}
        <div
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <a onClick={() => handleNavigate('/')}>Home</a>
        <a onClick={() => handleNavigate('/products')}>Products</a>
        <a onClick={() => handleNavigate('/about')}>About</a>
        <a onClick={() => handleNavigate('/contact')}>Contact</a>
      </div>
    </>
  );
};

export default Navigation;
