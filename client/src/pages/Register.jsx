import React from 'react'
import "./register.css"
const Register = () => {
  return (
    <div className='container-register'>
      <div className="wrapper-register">
        <h1 className="title-register">CREATE AN ACCOUNT</h1>
        <form action="" className="register-form">
          <input type="text" className="register-input" placeholder="name" />
          <input type="text" className="register-input" placeholder="last name"/>
          <input type="text" className="register-input" placeholder="username" />
          <input type="text" className="register-input" placeholder="email" />
          <input type="text" className="register-input" placeholder="password" />
          <input type="text" className="register-input" placeholder="confirm password" />
          <span className="agreement"></span>
          <button className="btn-create">CREATE </button>
        </form>

      </div>
    </div>
  )
}

export default Register