import React from 'react';
import { Link } from 'react-router-dom';
import { AUTH } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';


const Header = ({ currentUser }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>

        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>

            <Link className="option" to="/shop">
                CONTACT
            </Link>

            {
                currentUser ? 
                <div className="option" onClick={() => AUTH.signOut()}>SIGNOUT</div>
                :
                <Link className="option" to="/signin">SIGN IN</Link>

            }
        </div>
    </div>
);

// Redux
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);