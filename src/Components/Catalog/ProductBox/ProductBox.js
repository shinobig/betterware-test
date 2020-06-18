import React from 'react';


class ProductBox extends React.Component{


render(){
let price = this.props.product.price.toFixed(2);
let tags = this.props.product.tag.map((tag)=>{
let icon;
switch(tag){
case 'hogar':
    icon =  <i className="fa fa-home"></i>;
    break;
    case 'electricos':
        icon =<i className="fa fa-plug"></i>;
    break;
case 'habitacion':
    icon = <i className="fa fa-bed"></i>;
    break;
    case 'vehiculos':
        icon = <i className="fa fa-truck-pickup"></i>;
break;
default:
icon = <i className="fa fa-tags"></i>;
break;
}
return <div className={tag}>{tag} {icon}</div> 
})

return(
    <div id={this.props.product.id} className={`${this.props.productBoxColSize} box-padd`}>
        <div className='product-box'>
<div className='row'>
<div className='col-md-6 col-xs-12'>
<img alt="" className='product-image' src={this.props.product.image}></img>
</div>

<div className='col-md-6 col-xs-12'>
<h4 className="product-name">{this.props.product.name}</h4>

<p className="price">$ {price}</p>  

{tags}

<button className="add-to-cart" onClick={()=>{this.props.handleAddingItem(this.props.product.id)}}>Agregar</button>
</div>
</div>
</div>
    </div>
);
}

}

export default ProductBox;