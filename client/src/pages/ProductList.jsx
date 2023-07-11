import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/announcement/Announcement'
import Products from '../components/product/Products'
import Newsletters from '../components/nnewsletters/Newsletters'
import Footer from '../components/footer/Footer'

import "./productList.css"
import { useLocation } from 'react-router'

const ProductList = () => {

  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters,setFilters] = useState({});
  const [sort,setSort] = useState("newest");

  const handleFilter = (e) => {
      const value = e.target.value;
      setFilters({
        ...filters,
        [e.target.name]: value
      })
  }


  return (
    <div >
<Navbar/>
<Announcement/>
<h1 className="title-product-list">{cat}</h1>
<div className="filter-container">
  <div className='filter'>
    <span className="filter-text">Filter Products: </span>
      <select name = "color"  className='select-list' onChange={handleFilter} >
        Color
<option value="white" className='option-list' >white</option>
<option value="white" className='option-list'>white</option>
<option value="black" className='option-list'>black</option>
<option value="red" className='option-list'>red</option>
<option value="blue" className='option-list'>blue</option>
<option value="yellow" className='option-list'>yellow</option>
<option value="grey" className='option-list'>grey</option>
      </select>
      <select name="size" id="" className='select-list' onChange={handleFilter}>
        Size
<option value="xs" className='option-list' >XS</option>
<option value="s" className='option-list'>S</option>
<option value="m" className='option-list'>M</option>
<option value="l" className='option-list'>L</option>
<option value="xl" className='option-list'>XL</option>

      </select>
   
  </div>
  <div className='filter'>
    <span className="filter-text">Sort Products:</span>
      <select name="sort" id="" className='select-list' onChange={(e) => setSort(e.target.value)}>
       
<option value="newest" className='option-list' >Newest</option>
<option value="asc" className='option-list'>Price (asc)</option>
<option value="desc" className='option-list'>Price (desc)</option>

      </select>
      
   
  </div>
</div>
<Products  cat={cat} filters={filters}  sort={sort}/>
<Newsletters/>
<Footer/>
    </div>
  )
}

export default ProductList