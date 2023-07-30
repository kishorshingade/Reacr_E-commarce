import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import React,{useState} from 'react';
import Products from './components/Products';
import Cart from './components/Cart';
import Mobiles from './components/Mobiles';
import Books from './components/Books';
import Fashion from './components/Fashion';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'

function App() {
  const [cart, setcart] = useState([])
  const [warning,setWarning] = useState (false)
  
  const addToCart =(item)=>{
    let isPresent = false
    cart.forEach((product)=>{
      if(item.id === product.id)
      isPresent = true
    })
    if(isPresent){
      setWarning(true)
      setTimeout(()=>{
        setWarning(false)
      },1000)
      return
    }
    setcart([...cart,item])
  }

  const handleProduct = (item,d) =>{
    let ind = -1 
    cart.forEach((data , index)=>{
        if(data.id === item.id)
         ind = index
    })
    const arr = cart
    arr[ind].amount += d
    if(arr[ind].amount === 0)
    arr[ind].amount = 1
    setcart([...arr])
  }
  return (
   <>
      {/* < Navbar size={cart.length}/> */}
   <Router>
    <Routes>
      <Route  path='/navbar' element={<Navbar  size={cart.length} />}/>
      <Route  path='/' element={<Products  size={cart.length} addToCart = {addToCart} />}/>
      <Route  path='/mobiles' element={<Mobiles  size={cart.length} addToCart = {addToCart} />}/>
      <Route  path='/fashion' element={<Fashion  size={cart.length} addToCart = {addToCart} />}/>
      <Route  path='/books' element={<Books  size={cart.length} addToCart = {addToCart} />}/>
      <Route  path='/cart' element={<Cart cart={cart}  setcart = {setcart}   handleProduct ={handleProduct} />}/>
    </Routes>
   </Router>
   

   {/* <Cart 
   cart={cart}
   setcart = {setcart}
   handleProduct ={handleProduct}
   /> */}
   {
    warning && <div className='warning'>item is Already  Added To Cart</div>
   }
   </>
  );
}

export default App;
