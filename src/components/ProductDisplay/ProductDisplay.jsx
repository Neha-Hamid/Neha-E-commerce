import React, { useContext, useState } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ProductDisplay = (props) => {
    const { product } = props;
    const { addtocart } = useContext(ShopContext)
    const [selectedSize, setSelectedSize] = useState("")

    const handleSizeClick = (size) => {
        setSelectedSize(size)
        toast(`Size ${size} selected`, {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            style: {
                background: "#d3d3d3",
                color: "#000",
                border: "2px solid orange",
                fontWeight: "600",
                borderRadius: "12px",
                textAlign: "center",
            },
            progressStyle: {
                background: "orange",
            }
        })
    }

    const handleAddToCart = () => {
        if (!selectedSize) {
            toast.error("Please select a size first!", {
                position: "top-center",
                autoClose: 1500,
                style: {
                    background: "#d3d3d3",
                    color: "#000",
                    border: "2px solid orange",
                    fontWeight: "600",
                    borderRadius: "12px",
                    textAlign: "center",
                },
                progressStyle: { background: "orange" }
            })
            return;
        }
        addtocart(product.id, selectedSize)
    }

    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img width='250px' height='250px' src={product.image} alt="" />
                    <img width='250px' height='250px' src={product.image} alt="" />
                    <img width='250px' height='250px' src={product.image} alt="" />
                    <img width='250px' height='250px' src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' width='250px' height='250px' src={product.image} alt="" />
                </div>
            </div>

            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>

                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        ${product.old_price}
                    </div>
                    <div className="productdisplay-right-price-new">
                        ${product.new_price}
                    </div>
                </div>

                <div className="productdisplay-right-description">
                Premium quality fabric with a relaxed fit and effortless style anytime.
                </div>

                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        {["S", "M", "L", "XL", "XXL"].map(size => (
                            <div
                                key={size}
                                className={selectedSize === size ? "active-size" : ""}
                                onClick={() => handleSizeClick(size)}
                            >
                                {size}
                            </div>
                        ))}
                    </div>
                </div>

                <button onClick={handleAddToCart}>ADD TO CART</button>
                
                <p className='productdisplay-right-category'><span>Tags: </span>Modern , Latest</p>
            </div>

            <ToastContainer />
        </div>
    )
}

export default ProductDisplay
