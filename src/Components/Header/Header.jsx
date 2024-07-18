import React, {useEffect, useReducer, useState} from 'react'
import "./Header.css"
import SearchBar from '../SearchBar/SearchBar'
import ecommerceLogo from "../../assets/Images/ecommerceLogo.png"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {useCart} from "../../Contexts/CartContext"
import {Link} from "react-router-dom";
import { useAuth } from '../../Contexts/AuthContext';



function Header() {
  
  const {state} = useCart();
  const {logout} = useAuth();

  const [totalPrice, setTotalPrice] = useState(0);

  const handleLogOut = ()=>{

     logout();
  }

  const calculatePrice = ()=>{
     let totalPrice = 0;
     for (let i  = 0; i < state.cart.length; i++){
         totalPrice += state.cart[i].productPrice;
     }
     console.log("total price "+ totalPrice)
     setTotalPrice(totalPrice);
  }

  useEffect (()=>{
     calculatePrice();

  },[state]);

  return (
    
    <div className="header" >
       <img src = {ecommerceLogo} className="headerLogo"/>

       <SearchBar/>

       <Link to = "/SignInPage" className = "signUpLink"> <h5  onClick={handleLogOut} > Log Out </h5> </Link>
       
       <Link  to = "/CartPage" className="cartPageLink">
       <div className = "cart">
         
         <div className="cartIcon">
          <ShoppingCartOutlinedIcon/>
          
         </div>
         
         { state.cart.length === 0 ? <h4>{"My Cart"} </h4>:
         <div className="cartItemTotalPrice">
         <h4>{state.cart.length + " Items"}</h4>
         <h4>{"Rs. " + totalPrice}</h4>


         </div>

  }

       </div>
       </Link>
    </div>
  )
}

export default Header
