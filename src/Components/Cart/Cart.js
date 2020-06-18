import React from 'react';
import './Cart.scss';
import CartItem from './CartItem/CartItem'




class Cart extends React.Component{


render(){

let totalPrice = this.props.totalPrice.toFixed(2);
let number = 1;
let cartItem = this.props.selectedProducts.map(product =>{

number++
return <CartItem product={product} 
handlePriceIncrease={this.props.handlePriceIncrease}
handlePriceDecrease={this.props.handlePriceDecrease}
handleRemoveItem={this.props.handleRemoveItem}
key={`cart-item${number}`}
decreaseTotalQuantity={this.props.decreaseTotalQuantity}
addTotalQuantity={this.props.addTotalQuantity}
/>
})

return(
    <div id='Cart' className='col-md-4 col-xs-12 box-padd'>
<div className='cart-display'>
<div className='row display-total'>
<div className='col-md-10 col-xs-10 '>Total $ {totalPrice}</div>
    <div className='col-md-2 col-xs-2  close-btn'><i onClick={this.props.handleHideShoppingCart} className="fa fa-times-circle"></i></div>
    </div>

{cartItem}
<div className='row remove-all'>
        <p onClick={this.props.handleRemoveAll}>Quitar Todo <i className="fa fa-trash-alt"></i></p>
        </div>
    </div>
    </div>
    
)
}


}

export default Cart;