import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
  let cart = localStorage.getItem('cart');
  if(cart){
    return JSON.parse(localStorage.getItem('cart'));
  }
  else{
    return [];
  }
}

const storeInLocalStorage = (data) => {
  localStorage.setItem('cart', JSON.stringify(data));
}

const initialState = {
  carts: fetchFromLocalStorage(),
  itemsCount: 0,
  totalAmount: 0,
  isCartMessageOn: false
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isItemInCart = state.carts.find(item => item.id === action.payload.id);

      if(isItemInCart){
        const tempCart = state.carts.map(item => {
          if(item.id === action.payload.id){
            let tempQty = item.quantity + action.payload.quantity;
            let tempTotalPrice = tempQty * item.price;

            return {
              ...item, quantity: tempQty, totalPrice: tempTotalPrice
            }
          }
          else{
            return item;
          }
        });
        state.carts = tempCart;
        storeInLocalStorage(state.carts);
      }
      else{
        state.carts.push(action.payload);
        storeInLocalStorage(state.carts);
      }
    },
    setCartMessageOn: (state) => {
      state.isCartMessageOn = true;
    },
    setCartMessageOff: (state) => {
      state.isCartMessageOn = false;
    },
    removeFromCart: (state, action) => {
      const tempCart = state.carts.filter(item => item.id !== action.payload);
      state.carts = tempCart;
      storeInLocalStorage(state.carts);
    },
    clearCart: (state) => {
      state.carts = [];
      storeInLocalStorage(state.carts);
    },
    getCartTotal: (state) => {
      state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
        return cartTotal += cartItem.totalPrice
      }, 0);
      state.itemsCount = state.carts.length;
    },
    toggleCartQty: (state, action) => {
      const tempCart = state.carts.map(item => {
        if(item.id === action.payload.id){
          let tempQty = item.quantity;
          let tempTotalPrice = item.totalPrice;

          if(action.payload.type === 'INC'){
            tempQty++;
            if(tempQty === item.quantity) tempQty = item.quantity;
            tempTotalPrice = tempQty * item.price;
          }

          if(action.payload.type === 'DEC'){
            tempQty--;
            if(tempQty < 1) tempQty = 1;
            tempTotalPrice = tempQty * item.price;
          }

          return {...item, quantity: tempQty, totalPrice:tempTotalPrice};
        }
        else{
          return item;
        }
      });
      state.carts = tempCart;
      storeInLocalStorage(state.carts);
    }
  },
});

export const { addToCart, setCartMessageOff, setCartMessageOn, getCartTotal, toggleCartQty, clearCart, removeFromCart } = cartSlice.actions;
export const getCartMessageStatus = (state) => state.cart.isCartMessageOn;
export const getAllCarts = (state) => state.cart.carts;
export const getCartItemsCount = (state) => state.cart.itemsCount;
export default cartSlice.reducer;
