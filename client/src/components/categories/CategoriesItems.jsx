import React from 'react';
import {Link} from "react-router-dom"
import './categories.css'

const CategoriesItems = ({item}) => {
  return (
    <div className='container-categories'>
      <Link to={`/products/${item.cat}`}>
      <img className="img-categories" src={item.img} alt=''/>
        <div className="info">
              <h1 className="title-categories">
                {item.title}
              </h1>
              <button className="button-categories">SHOP NOW</button>
        </div>
      </Link>
    </div>
  )
}

export default CategoriesItems