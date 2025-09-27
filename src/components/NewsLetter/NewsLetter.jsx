import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  const handleSubscribe = () => {
    const emailInput = document.querySelector('.newsletter input[type="email"]');
    const email = emailInput.value.trim();

    if (email && email.includes('@')) {
      alert('Subscribed!');
      emailInput.value = ''; 
    } else {
      alert('Please enter a valid email.');
    }
  }

  return (
    <div className="newsletter">
        <h1>
            Get Exclusive Offers on Your Email
        </h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type="email" placeholder='Your Email id' />
            <button onClick={handleSubscribe}>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter
