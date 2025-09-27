import React, { useState } from 'react';
import './Hero.css';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleCategoryClick = (category) => {
    // Notify navbar about category selection
    window.dispatchEvent(new CustomEvent('menuChange', { detail: category }));

    // Navigate to the selected category page
    if (category === 'Men') navigate('/mens');
    else if (category === 'Women') navigate('/womens');
    else if (category === 'Kids') navigate('/kids');

    setDropdownVisible(false);
  };

  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>Wear the West, Wear Your Style</h2>
        <div>
          <div className='container'>
            <div className='row'>
              <div className='col-6 mt-2'>
                <h1 className='fw-bold'>Elevate your<br /> Wardrode Today! </h1>
              </div>
            
            </div>
          </div>
        </div>

        <div className='hero-latest-btn' onClick={handleShopNowClick}>
          Shop Now <span style={{ fontSize: '18px' }}>→</span>
        </div>

        {dropdownVisible && (
          <div className='hero-dropdown'>
            {['Men', 'Women', 'Kids'].map((cat) => (
              <div
                key={cat}
                className='hero-dropdown-item'
                onClick={() => handleCategoryClick(cat)}
              >
                {cat}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className='hero-right'>
        <img src={hero_image} height='550px' width='500px' />
      </div>
    </div>
  );
};

export default Hero;
