import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, YouTube } from '@mui/icons-material'
import React from 'react'
import  './footer.css'
const Footer = () => {
  return (
    <div className='container-footer'>
      <div className="left-footer">
        <h1 className="logo-footer"><b>BLACK</b></h1>
        <p className="desc-footer">There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.</p>
        <div className="social-container">
          <div className="social-icon" style={{color:"3B5999"}} > <Facebook/> </div>
          <div className="social-icon" style={{color:"E4405F"}} > <Instagram/> </div>
          <div className="social-icon" style={{color:"55ACEE"}}> <YouTube/> </div>
          <div className="social-icon" style={{color:"E60023"}}>< Pinterest/> </div>
          
        </div>
      </div>
      <div className="center-footer">
        <h3 className="title-footer">Useful Links</h3>
        <div className="list-footer">
          <div className="list-item-footer">Home</div>
          <div className="list-item-footer">Cart</div>
          <div className="list-item-footer">Man Fashion</div>
          <div className="list-item-footer">Woman Fashion</div>
          <div className="list-item-footer">Accessories</div>
          <div className="list-item-footer">My Account</div>
          <div className="list-item-footer">Order Tracking</div>
          <div className="list-item-footer">Wishlist</div>
          <div className="list-item-footer">Wishlist</div>
          <div className="list-item-footer">Terms</div>
        </div>
      </div>
      <div className="right-footer">
      <h3 className="title-footer">Contact</h3>
      <div className="contact-item"><Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
</div>
      <div className="contact-item"> <Phone style={{marginRight:"10px"}}/> +1 234 56 78</div>
      <div className="contact-item"> <MailOutline style={{marginRight:"10px"}} /> contact@lama.dev</div>
      <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
      </div>
    </div>
  )
}

export default Footer