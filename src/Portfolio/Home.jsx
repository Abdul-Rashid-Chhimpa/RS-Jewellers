import './CSS/Home.css';
import Product from './Product';
import Navbar from './NavBar';
import { useState, useEffect } from 'react';
import jsonDb from '../JsonData/earing.json';

const HomePage = () => {
  // State to hold the currently displayed product
  const [currentProduct, setCurrentProduct] = useState(jsonDb[0]);

  useEffect(() => {
    // Function to pick a random product
    const getRandomProduct = () => {
      const randomIndex = Math.floor(Math.random() * jsonDb.length);
      setCurrentProduct(jsonDb[randomIndex]);
    };

    // Set initial product (optional, since default is first)
    getRandomProduct();

    // Change product every 2000ms (2 seconds)
    const intervalId = setInterval(getRandomProduct, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array: runs only once on mount

  return (
    <>
    <Navbar/>
      <div className="containor">
        <div className="product-qoute">
          <span>{currentProduct.name || 'Diamond Necklace'}</span>
          <p>“{currentProduct.Qoute || 'A diamond is a reminder that under pressure, beauty is born.'}”</p>
          <button>- Explore Now</button>
        </div>
        <div className="product-img">
          <img 
            src={currentProduct.img} 
            alt={currentProduct.name || 'Product'} 
          />
          <span>{currentProduct.name || 'Diamond Necklace'}</span>
        </div>
      </div>
      <br />
      <Product/>

      <footer>
        <span>Presented By : <p>Abdul Rashid Chhimpa</p></span>
      </footer>
    </>
  );
};

export default HomePage;