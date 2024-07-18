import React, {useEffect, useState} from 'react'
import "./ProductSelected.css"
import {useCart} from "../../Contexts/CartContext"


function ProductSelected({product}) {
  

  

  const {productId,productImage, productDescription,productNetWeight,productPrice} = product;
  const {state,dispatch} = useCart();
  const [isAddButtonClicked ,setIsAddButtonClicker] = useState(false);
  const [numProduct, setNumProduct] = useState(0);

  
   
  const calculateNumProduct =  ()=>{
    
    let num = 0;

    for (let i = 0; i < state.cart.length; i++){
      if(state.cart[i].productId === productId ){
        num++;
      }

    }
    console.log("hello "+ num)
    setNumProduct(num);
  }

  useEffect(()=>{
    calculateNumProduct();

  },[state])
   
   const handleAddProductToCart = () => {
          
         
         setIsAddButtonClicker(true);

         dispatch({type:"ADD_PRODUCT_TO_CART", payload:product});
   } 


   const handleRemoveProductFromCart = () => {
    if(numProduct !== 0){
    dispatch({type:"REMOVE_PRODUCT_FROM_CART", payload:productId});
    }
} 

 if(numProduct !== 0){
  return (
    
    <div className="productSelected">
             <div className="productSelectedImage">
              <img src = {productImage}/>
             </div>
              
              <div className="productDescription">
             <h4>{productDescription}</h4>

             <p>{productNetWeight}</p>

             

              
              <div className = "addRemoveButtonSelectedProduct">
      
              <button  onClick={handleAddProductToCart}>+</button>
              <p>{numProduct}</p>
              <button  onClick={handleRemoveProductFromCart}>-</button>

            
             </div>
             :
             
          
            
             
             </div>

             <h6>{"Rs. " + productPrice}</h6>
    </div>
    
    )}
}

export default ProductSelected
