import React from 'react'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import './newsletters.css'
const Newsletters = () => {
  return (
    <div className='container-newsletters'>
      <h1 className="letter-title">Newsletters</h1>
      <div className="desc-letter">Get timely updates from your favorite products.</div>
      <div className="input-container">
        <input type="text" className="input-letter" />
        <button className="btn-letter"> <SendOutlinedIcon/></button>
      </div>
    </div>
  )
}

export default Newsletters