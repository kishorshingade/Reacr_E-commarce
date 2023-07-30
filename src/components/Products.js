import React, { useEffect, } from 'react'
import dashboard from '../data3'
import '../components/Styles/Products.css'
import Cards from './Cards'
import { Link, useNavigate } from 'react-router-dom'
import '../components/Styles/Navbar.css'
import Footer from './Footer'


function Products({ addToCart, size }) {
  const navigate = useNavigate()
  const cart = () => {
    navigate('/cart')
  }
  const mobiles = () => {
    navigate('/mobiles')
  }

  const books = () => {
    navigate('/books')
  }
  const home = () => {
    navigate('/')
  }
  const fashion = () => {
    navigate('/fashion')
  }
  return (
    <>


      <nav className="navbar navbar-expand-lg bg-white fixed-top">
        <div className="container">
          <a className="navbar-brand" >MyShop.com</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" onClick={home} >Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" onClick={mobiles} >Mobiles</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" onClick={books} >Books</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" onClick={(fashion)} >Fashion</a>
              </li>
            </ul>
            <div className='cart'>
              <span>
                <i className='fas fa-cart-plus' onClick={cart}></i>
              </span>
              <span >{size}</span>
            </div>
          </div>
        </div>
      </nav>


      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://static.vecteezy.com/system/resources/previews/002/288/687/large_2x/women-in-fashion-banner-sale-discount-free-vector.jpg" className="d-block w-100"></img>
          </div>
          <div className="carousel-item">
            <img src="https://wallpapercave.com/wp/wp2252616.jpg" className="d-block w-100"></img>
          </div>
          <div className="carousel-item">
            <img src="https://cdn.wallpapersafari.com/85/82/qQInl7.jpg" className="d-block w-100"></img>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <h1 className='fproducts'>Feature Products</h1>
      <section>
        {
          dashboard.map((item) => (
            <Cards
              item={item}
              key={item.id}
              addToCart={addToCart}
            />
          ))
        }
      </section>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default Products