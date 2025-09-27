import React from 'react';
import './NewCollections.css';
import p1_img from '../Assets/product_12.png';
import p2_img from '../Assets/product_35.png';
import p3_img from '../Assets/product_14.png';
import p4_img from '../Assets/product_8.png';
import p5_img from '../Assets/product_15.png';
import p6_img from '../Assets/product_2.png';
import p7_img from '../Assets/product_17.png';
import p8_img from '../Assets/product_28.png';

const NewCollections = () => {
  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-around">
      <div className="centered-text">
  <h1>New Collections</h1>
  <hr />
</div>
        

        <div className="col-lg-2">
          <a target="_blank" href={p1_img}>
            <img className="rounded-circle border" src={p1_img} width="250px" alt="Product 1" />
          </a>
          <p>Fitted Navy Shirt</p>
          <p>$100  <span className="text-decoration-line-through ms-3">$150</span></p>
        </div>

        <div className="col-lg-2">
          <a target="_blank" href={p2_img}>
            <img className="rounded-circle border" src={p2_img} width="250px" alt="Product 2" />
          </a>
          <p>Track Jacket</p>
          <p>$100 <span className="text-decoration-line-through ms-3">$150</span></p>
        </div>

        <div className="col-lg-2">
          <a target="_blank" href={p3_img}>
            <img className="rounded-circle border" src={p3_img} width="250px" alt="Product 3" />
          </a>
          <p>Color-Block Jacket</p>
          <p>$100 <span className="text-decoration-line-through ms-3">$150</span></p>
        </div>

        <div className="col-lg-2">
          <a target="_blank" href={p4_img}>
            <img className="rounded-circle border" src={p4_img} width="250px" alt="Product 4" />
          </a>
          <p>Floral Puff-Sleave Blouse</p>
          <p>$100 <span className="text-decoration-line-through ms-3">$150</span></p>
        </div>
      </div>

      <div className="row d-flex justify-content-around">
        {
              
              <div className="row d-flex justify-content-around">
              
              
                  <div className="col-lg-2"> 
                  <a  target='_blank' href={p5_img}>
                  <img className='rounded-circle   border' src={p5_img} width='250px' />
                  </a>
                 <p>Printed Bomber Jacket</p>
                 <p>$100  <span className='text-decoration-line-through ms-3'>$150</span></p>
                 </div>
                  <div className="col-lg-2 ">
                  <a  target='_blank' href={p6_img}>
                  <img className='rounded-circle   border' src={p6_img} width='250px' />
                  </a>
                 <p>Pink Top</p>
                 <p>$100  <span className='text-decoration-line-through ms-3'>$150</span></p>
              </div>
                 <div className="col-lg-2">
                 <a  target='_blank' href={p7_img}>
                  <img className='rounded-circle   border' src={p7_img} width='250px' />
                  </a>
                  <p>Button-up Denim Shirt</p>
                  <p>$100  <span className='text-decoration-line-through ms-3'>$150</span></p>
                 </div>
                 <div className="col-lg-2  ">
                 <a  target='_blank' href={p8_img}>
                  <img className='rounded-circle   border' src={p8_img} width='250px' />
                  </a>
                  <p>Olive Sweatshirt</p>
                  <p>$100  <span className='text-decoration-line-through ms-3'>$150</span></p>
                  </div>
                </div>
              
        }
      </div>
    </div>
  );
};

export default NewCollections;
