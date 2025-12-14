import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './Welcome';
import Home from './Home';
import MixedImg from './MixedImg';
import ViewDetails from './ViewDetails';
import About from './About';
import Contact from './Contact';

const PortfolioWebsite = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<MixedImg />} />
        <Route path="/view" element={<ViewDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PortfolioWebsite;
