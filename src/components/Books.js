import React from 'react'
import list from '../data'
import Bookscard from './Bookscard'
import '../components/Styles/Products.css'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer'

const Books = ({ addToCart, size }) => {
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
                <a className="nav-link " aria-current="page" onClick={fashion} >Fashion</a>
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

      <section>
        {
          list.map((item) => (
            <Bookscard
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

export default Books
