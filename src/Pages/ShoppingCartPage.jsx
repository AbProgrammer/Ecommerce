import React, { useState,useEffect } from 'react'
import Header from '../Components/Header/Header'
import {useCart} from "../Contexts/CartContext"
import ProductSelected from '../Components/Product/ProductSelected';
import "./ShoppingCartPage.css";
import CryptoJS from 'crypto-js';
import { v4 as uuidv4 } from 'uuid';
import {Link} from "react-router-dom";


function ShoppingCartPage() {

  
  
  const {state} = useCart();

  const [totalPrice, setTotalPrice] = useState(0);


  const secretkey = "8gBm/:&EnhH.1/q";

  const transactionId = uuidv4();

  const message =`total_amount=${totalPrice},transaction_uuid=${transactionId},product_code=EPAYTEST`
    
  
   console.log("message "+ message)

  const hash = CryptoJS.HmacSHA256(message, secretkey);
  const signature = CryptoJS.enc.Base64.stringify(hash);



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


  const products = [...new Set(state.cart)];

  if(state.cart.length === 0){
   
    return (

      <div className = "emptyCart">
      <Header/>

      <div className = "emptyCartBox">

      <div className="emptyCartBoxMessage">

     <h2> You don't have any items in your cart </h2>
      <p> Your favourite items are just a click away </p>
      <Link to = "/"><button className = "startShoppingButton"> Start Shopping</button> </Link>
      </div>

      </div>
      </div>
    )
  }

  return (
     
    <div className = "shoppingCartPage">

    <Header/>
    <div className= "shoppingCart">
     
    <div className ="productsList" >
      
    <div className="shoppingCartTitle"> 
         <h1> Shopping Cart</h1>
         <h6> Price</h6>
      </div>

     {products.map((product,index) => (
         
         < ProductSelected key = {index} product = {product}/>
     ))}

    

    <h2>{"Subtotal ("+ state.cart.length +"): Rs." + totalPrice }</h2>
      </div>
      <div className = "checkOutBox">

        <div className="subTotalBox">
      <h2>{"Subtotal ("+ state.cart.length +"): Rs." + totalPrice }</h2>

      <form action="https://rc-epay.esewa.com.np/api/epay/main/v2/form" method="POST">
      <input type="hidden" id="amount" name="amount" value={totalPrice} required/>
 <input type="hidden" id="tax_amount" name="tax_amount" value ="0" required/>
 <input type="hidden" id="total_amount" name="total_amount" value={totalPrice} required/>
 <input type="hidden" id="transaction_uuid" name="transaction_uuid" value = {transactionId} required/>
 <input type="hidden" id="product_code" name="product_code" value ="EPAYTEST" required/>
 <input type="hidden" id="product_service_charge" name="product_service_charge" value="0" required/>
 <input type="hidden" id="product_delivery_charge" name="product_delivery_charge" value="0" required/>
 <input type="hidden" id="success_url" name="success_url" value="https://esewa.com.np" required/>
 <input type="hidden" id="failure_url" name="failure_url" value="https://google.com" required/>
 <input type="hidden" id="signed_field_names" name="signed_field_names" value="total_amount,transaction_uuid,product_code" required/>
 <input type="hidden" id="signature" name="signature" value={signature} required/>
 <button  className="esewaPaymentButton"> Pay With Esewa </button>
 </form>
       
   
      </div>
      </div>
    </div>
    </div>
  )
}

export default ShoppingCartPage
