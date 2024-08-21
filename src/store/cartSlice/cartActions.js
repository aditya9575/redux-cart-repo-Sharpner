import { uiActions } from "../uiSlice/uiSlice";
import { cartActions } from "./cartSlice";

export const fetchCartData = () => {
    return async (dispatch) => {
const fetchData = async() =>{
   const response = await fetch("https://sharpner-redux-based-cart-app-default-rtdb.firebaseio.com/cart.json");
if(!response.ok){
    throw new Error("Could not fetch cart data")
}
   const data = await response.json();
   return data;
}

try {
  const cartData = await fetchData() 
  dispatch(cartActions.replaceCart({
    items:cartData.items || [],
    totalQuantity: cartData.totalQuantity,
  }));
} catch (error) {
    dispatch(
        uiActions.showNotification({
          status: "error",
          title: "error",
          message: "fetching cart data failed!",
        })
      ); 
}
    };
}

// adding data to backend by sending request redux thunk concept 
export const sendCartData = (cart) => {
    return async (dispatch) => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "sending",
          message: "sending cart data!",
        })
      );
  
      const sendRequest = async () => {
        const response = await fetch(
          "https://sharpner-redux-based-cart-app-default-rtdb.firebaseio.com/cart.json",
          { method: "PUT", body: JSON.stringify(cart) }
        );
  
        if (!response.ok) {
          throw new Error("Sending cart data failed ");
        }
      };
  
      try {
        await sendRequest();
        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: "Sent cart data successfully!",
          })
        );
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "error",
            message: "sending cart data failed!",
          })
        );
      }
    };
  };