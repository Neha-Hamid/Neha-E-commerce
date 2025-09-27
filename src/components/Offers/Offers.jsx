import React, { Component } from 'react';
import './Offers.css';
import exclusive_image from '../Assets/exclusive_image.png';

class Offers extends Component {
  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      buttonText: 'Check Now',
    };

    // Binding event handler method
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  // Lifecycle method
  componentDidMount() {
    console.log('Component is mounted');
  }

  // Event handler for button click
  handleButtonClick() {
    // Update state when the button is clicked
    this.setState({ buttonText: 'Button Clicked' });
  }

  // Render
  render() {
    return (
      <div className="container-fluid">
        <div className="row col-lg-10 offset-1 offers">
          <div className="col-lg-5 mt-5 pt-5 ms-5">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p className="fw-bold">ONLY ON BEST SELLING PRODUCTS</p>
          </div>
          <div className="col-lg-6 mt-4">
            <img src={exclusive_image} width="350px" height="400px" alt="Exclusive Offer" />
          </div>
        </div>
        <br/><br/>
      </div>
    );
  }
}

export default Offers;
