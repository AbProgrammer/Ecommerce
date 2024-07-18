import React, {createContext,useContext, useReducer} from "react";
import { cartReducer,initialCartState } from "../Reducers/cartReducer";


const cartContext = createContext(initialCartState);

export const CartProvider = ({children}) => {

const [state,dispatch] = useReducer(cartReducer,initialCartState);

return (

    <cartContext.Provider value = {{state,dispatch}} >

        {children}
    </cartContext.Provider>

);

};


export const useCart = () => {
    const context =  useContext(cartContext);
    if(context === undefined){
        throw new Error("useCart must be used within a CartProvider")

    }
    
    return context;

 };


     