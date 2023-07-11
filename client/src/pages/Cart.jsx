import "./cart.css"
import Navbar from "../components/Navbar"
import React, { useEffect, useState } from 'react'
import Announcement from "../components/announcement/Announcement"
import Footer from "../components/footer/Footer"
import { Add, Remove } from "@mui/icons-material"
import { useSelector } from "react-redux"
import StripeCheckout from "react-stripe-checkout"
import { userRequest } from "../requestMethod"
import { useNavigate } from "react-router"

const KEY= process.env.REACT_APP_STRIPE;

const Cart = () => {

  const[stripeToken,setStripeToken] = useState(null);
  const navigate = useNavigate();
  const cart = useSelector(state => state.cart);


const onToken = (token ) => {
setStripeToken(token);
};

useEffect(() => {
  const makeRequest = async () => {
    try{
      const res = await userRequest.post("/checkout/payment",{
        tokenId:stripeToken.id,
        amount: 500,
        
      });
      navigate("/success",{
        stripeData: res.data,
        products: cart, });
    }catch{ }
  }
 stripeToken && makeRequest()
},[stripeToken,cart.total,navigate])

console.log(stripeToken)

  return (
    <div className="cart-container">
      <Navbar/>
      <Announcement/>
      <div className="wrapper-cart">
        <h1 className="tittle-cart">YOUR BAG</h1>
        <div className="top">
        <button className="top-btn">CONTINUE SHOPPING</button>
        <div className="top-texts">
        <span className="top-text">Shopping Bag(2)</span>
        <span className="top-text">Your Wishlist (0)</span>
        </div>
        <button className="top-btn">CHECKOUT NOW</button>
        </div>
        <div className="bottom">
          <div className="info-cart">
           {cart.products.map(product => (

          <div className="product-cart" key={product._id}>
              <div className="product-detail">
                <img className="img-cart" src={product.img} alt="" />
                <div className="details">
                  <span className="name-product"><b>Product:</b> {product.title}</span>
                  <span> <b>ID:</b> {product.id}</span>
                  <div className="product-color">{product.color}</div>
                  <span> <b>Size:</b>{product.size}</span>
                </div>
              </div>
              <div className="price-detail">
              <div className="amount-contain-cart">
              <Remove/>
              <div className="amount-cart">
                {product.quantity}
              </div>
              <Add/>
            </div>
            <span className="product-price">$ {product.price* product.quantity}</span>
              </div>
            </div>
             ) ) }
        <hr className="hr"/>
        
          </div>
          <div className="summary">
            <h1 className="summary-title">ORDER SUMMARY</h1>
            <div className="summary-item">
              <span>Subtotal</span>
              <span>$ {cart.total}</span>
            </div>
            <div className="summary-item">
              <span>Estimated Shipping</span>
              <span>$ 5.90</span>
            </div>
            <div className="summary-item">
              <span>Shipping Discount</span>
              <span>$ -5.90</span>
            </div>
            <div className="summary-item">
              <span>TOTAL</span>
              <span>$ {cart.total}</span>
            </div>
            <StripeCheckout 
      name="BLACK SHOP"
      billingAddress
      shippingAddress
      description={`Your total is $ ${cart.total}`}
      amount={cart.total * 100}
      token={onToken}
      stripeKey={KEY}
      >
            <button className="btn-cart">CHECKOUT NOW</button>
            </StripeCheckout>
          </div>
        </div>
        
      </div>
      <Footer/>
    </div>
  )
}

export default Cart