// MixedImg.jsx
import { useState } from 'react';
import jsonDb from '../JsonData/earing.json';
import './CSS/MixedImg.css';
import { useNavigate } from 'react-router-dom';
import ViewDetails from './ViewDetails';

const MixedImg = () => {
  const [selectedCategories, setSelectedCategories] = useState({
    all: true,
    ring: false,
    earing: false,
    pendant: false,
    bangle: false,
    payel: false,
  });

  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // CHANGE 1: Store single object, not array
  const [viewDetail, setViewDetails] = useState(null); // ← null, not ""

  const handleCategoryChange = (category) => {
    if (category === 'all') {
      setSelectedCategories({
        all: true,
        ring: false,
        earing: false,
        pendant: false,
        bangle: false,
        payel: false,
      });
    } else {
      setSelectedCategories((prev) => {
        const newState = {
          ...prev,
          all: false,
          [category]: !prev[category],
        };

        const anySelected = Object.keys(newState).some(
          (key) => newState[key] && key !== 'all'
        );
        if (!anySelected) newState.all = true;

        return newState;
      });
    }
  };

  const getFilteredItems = () => {
    const activeCats = Object.keys(selectedCategories)
      .filter((cat) => selectedCategories[cat] && cat !== 'all');

    if (selectedCategories.all || activeCats.length === 0) return jsonDb;

    return jsonDb.filter((item) => {
      const name = (item.name || item.title || '').toLowerCase();
      return activeCats.some((cat) => {
        const term = cat.toLowerCase();
        return name.includes(term) || (term === 'pendant' && name.includes('pandel'));
      });
    });
  };

  const filteredItems = getFilteredItems();

  // CHANGE 2: Use .find() instead of .filter() → returns single object
  const viewDetails = (id) => {
    const product = jsonDb.find((item) => item.id === id); // ← single object!
    localStorage.setItem("ViewDetail", JSON.stringify(product));
    if (product) {
      setViewDetails(product);  // ← now it's {id, name, img, ...}
      navigate("/view");
    }
    
  };

  return (
    <>
      {/* Mobile Filter Toggle */}
      <button
        className="filter-toggle"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? 'Close' : 'Filter'}
      </button>

      <div className="mixed-img">
        {/* Sidebar */}
        <aside className={`filter ${isSidebarOpen ? 'open' : 'hidden'}`}>
          <div className="category">- Categories -</div>
          {[
            { key: 'all', label: 'All Items' },
            { key: 'gold ring', label: 'Rings' },
            { key: 'earing', label: 'Earrings' },
            { key: 'pendant', label: 'Pendants' },
            { key: 'bangle', label: 'Bangles' },
            { key: 'payel', label: 'Payel' },
          ].map(({ key, label }) => (
            <label key={key}>
              <input
                type="checkbox"
                checked={!!selectedCategories[key]}
                onChange={() => handleCategoryChange(key)}
              />
              <span>{label}</span>
            </label>
          ))}
        </aside>

        {/* Product Grid */}
        <section className="img-details">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div className="card" key={item.id}>
                <img
                  src={item.img || '/placeholder.jpg'}
                  alt={item.name}
                  onError={(e) => (e.target.src = '/placeholder.jpg')}
                />
                <div className="product-name">{item.name || item.title}</div>
                <div className="weigth">Weight: <p>{item.gm || 'N/A'}</p></div>
                <div className="price">₹{item.price || '00,000'}</div>

                <button
                  className="view-details"
                  onClick={() => viewDetails(item.id)}
                >
                  View Details
                </button>
              </div>
            ))
          ) : (
            <div className="no-products">No products found.</div>
          )}
        </section>
      </div>

      {/* Only show ViewDetails when a product is selected */}
      {viewDetail && <ViewDetails data={viewDetail} />}
    </>
  );
};

export default MixedImg;