import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/announcement/Announcement'
import Newsletters from '../components/nnewsletters/Newsletters'
import Footer from '../components/footer/Footer'
import "./product.css"
import { Add, Remove } from '@mui/icons-material'
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../requestMethod'
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'


const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

useEffect(() => {
  const getProduct = async () => {
    try{
        const res = await publicRequest.get("/products/find/" + id)
        setProduct(res.data)
    }catch {}
  }
  getProduct()
},[id])

const handleQuantity = (type) => {
if(type ==="dec"){
  quantity > 1 ? setQuantity(quantity-1) : setQuantity(quantity)
}else{
  setQuantity(quantity+1)
}
}

const handleClick = ( ) => {
  dispatch( addProduct({...product, quantity, color,size})
  )
}



  return (
    <div>
      <Navbar/>
      <Announcement/>
      <div className="wrapper-product">
        <div className="img-container-product">
          <img src={product.img} alt=""  className='img-product-page'/>
        </div>
        <div className="info-container-product">
            <h1 className="title-product">{product.title}</h1>
            <p className="desc-product">  {product.desc} </p>
            <span className="price">$ {product.price}</span>
            <div className="filter-container-product">
              <div className="filter-product">
                <span className="filter-title">Color</span>
                {product.color?.map((c) => (
                  <div className="filter-color" color={c} key={c._id} onClick={()=> setColor(c)} ></div>
                ))}
                
                
              </div>
              <div className="filter-product">
                <span className="filter-title">Size</span>
                
                  <select className='select-product' onChange={(e)=> {setSize(e.target.value)}}>
                  {product.size?.map((s) => (
                  <option key={s._id} className='option-product'>{s}</option>
                ))}
                    
                  </select>
               
              </div>
            </div>
            <div className="add-container">
            <div className="amount-contain">
              <Remove onClick={() => handleQuantity("dec")}/>
              <span className="amount">
                {quantity}
              </span>
              <Add onClick={() => handleQuantity("inc")}/>
            </div>
            <button onClick={handleClick} className="add-btn">ADD TO CARD</button>
            </div>
        </div>
      </div>
      <Newsletters/>
      <Footer/>
    </div>
  )
}

export default Product