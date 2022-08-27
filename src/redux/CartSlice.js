import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";

const initialState = {
    cartItems: [],
    cartTotalQouantity: 0,
    cartTotalAmount: 0
}
const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        //___________function Addtocart
        AddToCart: (state, action) => {
            const ItemFind = state.cartItems.findIndex((item) => item.id === action.payload.id)
            if (ItemFind >= 0) {
                state.cartItems[ItemFind].cartQouantity += 1
                toast.info("Increased order quantity", {
                    position: "bottom-left",
                });
            } else {
                const Temp = { ...action.payload, cartQouantity: 1 }
                state.cartItems.push(Temp)
                toast.success("Order added to food menu", {
                    position: "bottom-left",
                });
            }
        },
        //___________function RemoveFromCart
        RemoveFromCart: (state, action) => {
            const Remove = state.cartItems.filter(item => item.id !== action.payload.id)
            state.cartItems = Remove
            toast.error("Order removed from food menu", {
                position: "bottom-left",
            });
        },
        //___________function Decrees

        Decrees: (state, action) => {
            const ItemFind = state.cartItems.findIndex((item) => item.id === action.payload.id)
            if (state.cartItems[ItemFind].cartQouantity > 1) {
                state.cartItems[ItemFind].cartQouantity -= 1
                toast.info("Decreased Order quantity", {
                    position: "bottom-left",
                });
            } else if (state.cartItems[ItemFind].cartQouantity === 1) {
                const Remove = state.cartItems.filter(item => item.id !== action.payload.id)
                state.cartItems = Remove
                toast.error("Order removed from food menu", {
                    position: "bottom-left",
                });
            }

        },
        //___________function clearCart

        clearCart: (state, action) => {
            state.cartItems = [];
            toast.error("Orders cleared", { position: "bottom-left" });
        },
        //___________function getTotals

        getTotals: (state, action) => {
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { price, cartQouantity } = cartItem;
                    const itemTotal = price * cartQouantity;
                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQouantity;
                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                }
            );
            total = parseFloat(total.toFixed(2));
            state.cartTotalQouantity = quantity;
            state.cartTotalAmount = total;
        },
    }
})
export const { AddToCart, RemoveFromCart, Decrees, clearCart, getTotals } = CartSlice.actions
export default CartSlice.reducer