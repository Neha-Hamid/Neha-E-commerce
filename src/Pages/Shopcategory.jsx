import React, { useContext, useState } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../components/Assets/dropdown_icon.png' 
import Item from '../components/Item/Item'

const Shopcategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [showMessage, setShowMessage] = useState(false);

  const handleExploreMore = (e) => {
    e.preventDefault(); 
    e.stopPropagation(); 
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2500);
  };

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12 products</span>
        </p>
      </div>

      <div className="container">
        <div className="shopcategory-products ms-5 ps-3">
          {all_product.map((item, i) => {
            if (props.category === item.category) {
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
            }
            return null;
          })}
        </div>
      </div>

      <div className="shopcategory-loadmore-wrapper">
        {showMessage && (
          <div className="explore-message">
            No more products to view
          </div>
        )}
        <button
          className="shopcategory-loadmore"
          onClick={handleExploreMore}
          type="button"
        >
          Explore More
        </button>
      </div>
    </div>
  )
}

export default Shopcategory
