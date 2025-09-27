// Shop.js
import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero/Hero';
import Popular from '../components/Popular/Popular';
import Offers from '../components/Offers/Offers';
import NewCollections from '../components/NewCollections/NewCollections';
import NewsLetter from '../components/NewsLetter/NewsLetter';

const Shop = () => {
  const [username, setUsername] = useState('');
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);

    // Get logged in user
    const user =
      sessionStorage.getItem('loggedInUser') ||
      localStorage.getItem('loggedInUser');
    if (user) {
      setUsername(user);
      // trigger slide-in animation
      setTimeout(() => setSlideIn(true), 100);
    }

    // Listen to auth events (login/logout)
    const handler = () => {
      const u =
        sessionStorage.getItem('loggedInUser') ||
        localStorage.getItem('loggedInUser');
      setUsername(u || '');
      setSlideIn(false);
      setTimeout(() => setSlideIn(true), 100);
    };
    window.addEventListener('auth', handler);

    return () => window.removeEventListener('auth', handler);
  }, []);

  return (
    <div>
      {username && (
        <div
          style={{
            textAlign: 'center',
            marginTop: '25px',
            fontSize: window.innerWidth <= 768 ? '16px' : '22px', // 👈 mobile vs desktop
            fontWeight: '600',
            color: '#5e35b1',
            textShadow: '1px 1px 3px rgba(0,0,0,0.1)',
            letterSpacing: '1px',
            transition:
              'transform 0.8s ease-out, opacity 0.8s ease-out, color 0.3s ease',
            cursor: 'default',
            transform: slideIn ? 'translateX(0)' : 'translateX(-100%)',
            opacity: slideIn ? 1 : 0,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#7b1fa2';
            e.currentTarget.style.transform = 'translateX(0) scale(1.02)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#5e35b1';
            e.currentTarget.style.transform = 'translateX(0) scale(1)';
          }}
        >
          Hi {username}!
        </div>
      )}

      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  );
};

export default Shop;
