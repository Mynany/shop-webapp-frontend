import React from 'react';
import { Link } from 'react-router-dom';
import './header.style.scss';
import {ReactComponent as logo} from '../../assets/logo.png'
import { auth } from '../../firebase/firebase.util.js'
const Header = ({currentUser}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <logo className="" ><img src={logo} alt="logo" /></logo>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/ ">
                CONTACT
            </Link>
            {
                currentUser?
                    (
                        <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>
                    )
                    : (
                        <Link className="option" to="/signin ">
                            SIGNIN
                        </Link>
                      )
            }
            
        </div>
    </div>
)

export default Header;