import React from 'react'
import { connect } from 'react-redux'
import CustomButton from '../customButton/CustomButton.component'
import './CartDropdown.styles.scss' 
import CartItem from '../cartItem/CartItem.component'
import { SelectCartItems } from '../../redux/cart/Cart.selectors'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import toggleCartHidden from '../../redux/cart/Cart.actions'

const CartDropdown = ({cartItems, history, dispatch}) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length ? 
                    (
                        cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem}/>
                        ))
                    )
                    :
                    <span className='empty-message'>Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={()=> 
                {
                    history.push('/checkout');
                    dispatch(toggleCartHidden())
                }
            }>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector ({
    cartItems: SelectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown))