import React from 'react'
import {Link} from 'react-router-dom'
import {createStructuredSelector} from 'reselect'

import './Header.styles.scss'
import {ReactComponent as Logo} from '../../asserts/crown.svg'
import {auth} from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../CartIcon/CartIcon.component';
import CartDropdown from '../cartDropdown/CartDropdown.component';
import { SelectCurrentUser } from '../../redux/user/User.selectors';
import { SelectCartHidden } from '../../redux/cart/Cart.selectors';

const Header = ({currentUser, hidden}) => {
    return(
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo'></Logo>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/shop'>CONTACT</Link>
                {
                    currentUser ?
                    ( <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div> )
                    :
                    ( <Link className='option' to='/signin'>SIGN IN</Link> )
                }
                <CartIcon />
            </div>
            {
                hidden ? null :
                <CartDropdown />
            }
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    currentUser: SelectCurrentUser,
    hidden: SelectCartHidden
})

export default connect(mapStateToProps)(Header)