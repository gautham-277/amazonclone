import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productsNumber: 0,
};
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
         const addproductexists=state.products.find((product)=>product.id===action.payload.id);
         if(addproductexists){
            addproductexists.quantity+=parseInt(action.payload.quantity);
         }else{
            state.products.push({...action.payload,quantity:parseInt(action.payload.quantity)});
         }
         state.productsNumber+=parseInt(action.payload.quantity);
        },
        removeFromCart:(state,action)=>{
          const productToRemove=state.products.find((product)=>product.id===action.payload);
          state.productsNumber = state.productsNumber - productToRemove.quantity;
          // find index of the product removing
          const index = state.products.findIndex(
            (product) => product.id === action.payload
          );
          // remove from the array
          state.products.splice(index, 1);
        }
    }
});
export const {addToCart,removeFromCart}=cartSlice.actions;
export default cartSlice.reducer;