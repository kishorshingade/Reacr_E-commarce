import React from 'react'
import '../components/Styles/Navbar.css'
import {Link,useNavigate} from 'react-router-dom'

function Navbar({size}) {

    return (
      <>
       {/* <nav>
        <div className='nav-box'>
         <span className='my-shop'>
          My Shopping
         </span>
         <div className='cart'>
          <span>
            <i className='fas fa-cart-plus'></i>
          </span>
          <span>{size}</span>
         </div>
        </div>
       </nav> */}


<nav className="navbar navbar-expand-lg">
  <div className="container">
    <a className="navbar-brand" >MyShop.com</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" >Home</a>
        </li>
        <li className="nav-item">
          <Link to={'/mobiles'}><a className="nav-link active" aria-current="page" >Mobiles</a></Link>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" >Books</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" >Fashion</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" >{size}</a>
        </li>
      </ul>
      <div className='cart'>
          <span>
          <i className='fas fa-cart-plus'></i> 
          </span>
          <span >{size}</span>
         </div>
    </div>
  </div>
</nav>

       </>
    )
}

export default Navbar
