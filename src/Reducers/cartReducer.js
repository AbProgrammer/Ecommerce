
const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART";

export const initialCartState = {

    cart:[]
}


function findSecondOccurrenceIndex(products, key, productId) {
    let firstIndex = -1;
    let secondIndex = -1;

    
    for (let i = 0; i < products.length; i++) {
        let item = products[i];
        if (item[key] === productId) {
            if (firstIndex === -1) {
                firstIndex = i;
            } else if (secondIndex === -1) {
                secondIndex = i;
                break; 
            }
        }
    }

    return secondIndex;
}

export const cartReducer = (state,action)=>{
    
    const {type,payload} = action;


    switch(type){

        case ADD_PRODUCT_TO_CART:
           
        
            return{
                ...state,
                cart: [...state.cart,payload]
            };

        case REMOVE_PRODUCT_FROM_CART:

        const updatedCart = state.cart;
        
        const secondOccurenceIndex = findSecondOccurrenceIndex(state.cart,"productId", payload);
        const firstOccurenceIndex = updatedCart.findIndex(product => product.productId === payload);

        
        console.log("before removing "+ JSON.stringify(state.cart))
        console.log("before removing first occurence "+ firstOccurenceIndex)

        if (secondOccurenceIndex !==-1){
            

           updatedCart.splice(secondOccurenceIndex,1)
        }


        else if (firstOccurenceIndex !==-1) {
            console.log("before removing first occurence "+ firstOccurenceIndex)

            console.log("before removing first occurence "+ JSON.stringify(state.cart))

            updatedCart.splice(firstOccurenceIndex,1)


        }




        console.log("after Removing products "+ JSON.stringify(updatedCart))
            return {
                ...state,
                cart: updatedCart

            }

            default: 
            return state;
    }
}

