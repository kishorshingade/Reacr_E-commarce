import React from 'react'
import '../components/Styles/Cards.css'

const Cards = ({item,addToCart}) => {
    const {title,author,img,price}= item
    return (
        <div className='cards'>
          <div className='img-box'>
            <img src={img}></img>
          </div>
          <div className='details'>
                 <p>{title}</p>
                 <p>{author}</p>
                 <p>Price - {price}</p>
                 <button onClick={()=>addToCart(item)}>Add To Cart</button>
          </div> 
        </div>
    )
}

export default Cards
