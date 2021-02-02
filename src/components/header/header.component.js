import React from 'react';
import {connect} from 'react-redux';

import {HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink, SignedInContainer, UserImage} from './header.styles';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart/cart-dropdown.component';
import {createStructuredSelector} from 'reselect';
import {selectHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selector'


import {auth} from '../../firebase/firebase.utils';

import {ReactComponent as Logo} from '../../assets/crown.svg';

const Header = ({currentUser, hidden}) => (
    
    <HeaderContainer >
        <LogoContainer to="/">
            <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">
                 SHOP
            </OptionLink>
            <OptionLink to="/contact">
                 CONTACT
            </OptionLink>
            {
                currentUser ?
                <SignedInContainer>
                    <OptionDiv onClick={() => auth.signOut()}>
                        SIGN OUT
                    </OptionDiv>
                    <UserImage imageLink={currentUser.photoURL} />
                </SignedInContainer>
                :
                <OptionLink to='/signin'>SIGN IN</OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        { hidden ? null : <CartDropdown /> }
        
    </HeaderContainer>
)

const mapStateToProps =  createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectHidden
})

export default connect(mapStateToProps)(Header);