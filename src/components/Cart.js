import React, { useState, useEffect } from 'react'
import '../components/Styles/Cart.css'
import Footer from './Footer'
import { Link, useNavigate } from 'react-router-dom'

function Cart({ cart, setcart, handleProduct }) {
    const [price, setprice] = useState(0)

    const removeItem = (id) => {
        const arr = cart.filter((item) => item.id !== id)
        setcart(arr)
    }

    const handlePrice = () => {
        let ans = 0
        cart.map((item) => {
            ans += item.amount * item.price
        })
        setprice(ans)
    }
    useEffect(() => {
        handlePrice()
    },)

    const navigate = useNavigate()
    
    const home = () => {
        navigate('/')
      }
    return (
        <>
            <article>
                {
                    cart?.map((item) => (
                        <div className='cart-box' key={item.id}>
                            <div className='cart-img'>
                                <img src={item.img}></img>
                                <p>{item.title}</p>
                            </div>
                            <div>
                                <button onClick={() => handleProduct(item, +1)}> + </button>
                                <button>{item.amount}</button>
                                <button onClick={() => handleProduct(item, -1)}> - </button>
                            </div>
                            <div>
                                <span>{item.price}</span>
                                <button onClick={() => removeItem(item.id)}>Remove</button>
                            </div>
                        </div>
                    ))
                }
                <div className='total '>
                    <span>Total Price of Your Cart</span>
                    <span>Rs - {price}</span>
                </div>
                <button className='btn btn-primary' onClick={home}>Shop more</button>
            </article>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default Cart
