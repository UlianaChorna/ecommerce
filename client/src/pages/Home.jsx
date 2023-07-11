import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/announcement/Announcement'
import Sidebar from '../components/sidebar/Sidebar'
import Categories from '../components/categories/Categories'
import Products from '../components/product/Products'
import Newsletters from '../components/nnewsletters/Newsletters'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Sidebar/>
      <Categories/>
      <Products/>
      <Newsletters/>
      <Footer/>
    </div>
  )
}

export default Home