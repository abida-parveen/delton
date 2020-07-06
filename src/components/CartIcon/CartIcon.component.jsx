import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../asserts/shopping-bag.svg'
import './CartIcon.styles.scss'
import { connect } from 'react-redux'
import toggleCartHidden from '../../redux/cart/Cart.actions'
import { SelectCartItemsCount } from '../../redux/cart/Cart.selectors'
import { createStructuredSelector } from 'reselect'


const CartIcon = ({toggleCartHidden,itemCount}) =>
{
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}

const mapStateToProps = createStructuredSelector ({
    itemCount: SelectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
