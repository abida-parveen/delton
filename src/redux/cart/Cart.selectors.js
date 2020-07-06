import { createSelector } from "reselect";

const SelectCart = state => state.cart;

export const SelectCartItems = createSelector(
    [SelectCart],
    cart => cart.cartItems
);

export const SelectCartHidden = createSelector(
    [SelectCart],
    cart => cart.hidden
);

export const SelectCartItemsCount = createSelector(
    [SelectCartItems],
    cartItems => cartItems.reduce((accumalatedQuantity,cartItem)=>
    accumalatedQuantity+cartItem.quantity,0
    )
);

export const SelectCartTotal = createSelector(
    [SelectCartItems],
    cartItems => cartItems.reduce((accumalatedQuantity,cartItem)=>
    accumalatedQuantity+cartItem.quantity * cartItem.price,0
    )
);