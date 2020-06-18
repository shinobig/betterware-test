import React from 'react';

class CartItem extends React.Component{

constructor(props){
super(props)
this.state={
    subTotal: this.props.product.price,
quantity: 1,
}
this.handleIncreaseQuantity = this.handleIncreaseQuantity.bind(this);
this.handleDecreaseQuantity = this.handleDecreaseQuantity.bind(this);
this.handleEachRemoveItem = this.handleEachRemoveItem.bind(this);
}

handleIncreaseQuantity(price){
this.props.handlePriceIncrease(price);

let fixedSubTotal = this.state.subTotal + this.props.product.price;
let fixedQuantity = this.state.quantity + 1;
this.props.addTotalQuantity();
this.setState({
    subTotal: fixedSubTotal,
    quantity: fixedQuantity, 
})

}

handleDecreaseQuantity(price){
    if(this.state.quantity > 1){
        this.props.handlePriceDecrease(price);
        let fixedSubTotal = this.state.subTotal - this.props.product.price;
        let fixedQuantity = this.state.quantity - 1;
        this.props.decreaseTotalQuantity();
        this.setState({
            subTotal: fixedSubTotal,
            quantity: fixedQuantity, 
        })

    }
}

handleEachRemoveItem(){
    this.props.handleRemoveItem(this.props.product.id, this.state.quantity);

}



render(){
let price= this.props.product.price.toFixed(2);
let subTotal = this.state.subTotal.toFixed(2);

return(
<div id={`cart-${this.props.product.id}`} className='row cart-item'>
    <div className='col-md-5 col-xs-5'>
    <img className='product-image' alt="" src={this.props.product.image}></img>
    </div>
    <div className='col-md-7 col-xs-7'>

   
    <div className='row'>
    
        <div className='col-md-6 col-xs-6'>
        <h4 className="product-name">{this.props.product.name}</h4>
            <p>Cantidad:</p>
            <p>Subtotal:</p>
        </div>
        <div className='col-md-6 col-xs-6'>
        <h4 className="product-name">${price}</h4>
            <p className='quantity-row'><i onClick={()=>{this.handleIncreaseQuantity(this.props.product.price)}} className="fa fa-arrow-circle-up up-arrow"></i><span className='quantity'>{this.state.quantity}</span><i onClick={()=>{this.handleDecreaseQuantity(this.props.product.price)}} className="fa fa-arrow-circle-down down-arrow"></i></p>
        
        <p className="price">$ {subTotal}</p> 
        </div>
    </div>

<button className="remove-btn" onClick={this.handleEachRemoveItem}>Remover</button>

    </div>

    </div>
);
}


}


export default CartItem;