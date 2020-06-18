import React from 'react';
import './Nav.scss';


const Nav = (props)=>{
    return(
        <div id='navbar' className='nav-bar'>
            <p className='total-of-products' onClick={props.handleShowConditional}>{props.totalQuantity} <i className="fa fa-shopping-cart"></i></p>
        </div>
    )
}

export default Nav;