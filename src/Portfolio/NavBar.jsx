// Navigation.jsx
import { useState } from 'react';
import './CSS/Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate=useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigateHome=()=>{
    navigate("/")
  }
  const navigateProducts=()=>{
    navigate("/products");
  }
  const navigateAbout=()=>{
    navigate("/about")
  }

const navigateContact=()=>{
  navigate("/contact");
}
  return (
    <>
      <div className="navigation">
        {/* Logo */}
        <div className="logo">
          <img src="OIP.webp" alt="Logo" /> {/* Replace with your logo */}
        </div>

        {/* Desktop Menu */}
        <div className="nav-links">
          <a href='home' onClick={navigateHome}>Home</a>
          <a href='products' onClick={navigateProducts}>Products</a>
          <a href='contact' onClick={navigateContact}>Contact</a>
          <a href='about' onClick={navigateAbout}>About</a>
          {/* <a href="#rings">Rings</a> */}
          {/* <a href="#earings">Earrings</a> */}
          {/* <a href="#pendants">Pendants</a> */}
      
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
         <a onClick={navigateHome}>Home</a>
          <a onClick={navigateProducts}>Products</a>
            <a href="#contact">Contact</a>
          <a href="#About">About</a>
      </div>
    </>
  );
};

export default Navigation;