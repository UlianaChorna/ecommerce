import React from 'react'
import "./product.css"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';



const Product = ({item}) => {
  return (
    <div className='container-product'>
      <div className="circle"> </div>
        <img src={item.img} alt="" className='img-product'/>
        <div className="info-product">
        <div className="icon"><ShoppingCartOutlinedIcon/>  </div>
        <div className="icon"><Link to = {`/product/${item._id}`}> <SearchOutlinedIcon/></Link></div>
        <div className="icon"><FavoriteBorderOutlinedIcon/></div>
        </div>
    </div>
  )
}

export default Product