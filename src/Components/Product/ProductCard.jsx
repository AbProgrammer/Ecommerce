import React, {useState} from 'react'
import "./ProductCard.css"
import {useCart} from "../../Contexts/CartContext"

function ProductCard(product) {
  const {productId,productImage, productDescription,productNetWeight,productPrice} = product;
  const {state,dispatch} = useCart();
  const [isAddButtonClicked ,setIsAddButtonClicker] = useState(false);
  const [numProduct, setNumProduct] = useState(0);

  


  
   
   const handleAddProductToCart = () => {
          
         setNumProduct(numProduct + 1);
         console.log("add button clicked")
         setIsAddButtonClicker(true);

         dispatch({type:"ADD_PRODUCT_TO_CART", payload:product});
   } 


   const handleRemoveProductFromCart = () => {
    if(numProduct !== 0){
    setNumProduct(numProduct - 1);
    dispatch({type:"REMOVE_PRODUCT_FROM_CART", payload:productId});
    }
} 

  return (
    <div className="product">
             <div className="productImage">
              <img src = {productImage}/>
             </div>
             
             <h4>{productDescription}</h4>

             <p>{productNetWeight}</p>

             <div className="addProduct">
             <h6>{"Rs. " + productPrice}</h6>

             {!isAddButtonClicked || numProduct === 0 ? 
             <>
              

              <button onClick={handleAddProductToCart}>ADD</button>
              
             </>
              :
              <div className = "addRemoveButton">
      
              <button onClick={handleAddProductToCart}>+</button>
              <p>{numProduct}</p>
              <button onClick={handleRemoveProductFromCart}>-</button>

            
             </div>
            }
            </div>
             
    </div>
  )
}

export default ProductCard
