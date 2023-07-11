import React from 'react'
import { categories } from '../../data'
import CategoriesItems from './CategoriesItems';
import './categories.css'

const Categories = () => {
  return (
    <div className='categories'>
      {categories.map(item => (
        <CategoriesItems item ={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Categories