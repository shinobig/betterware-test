import React from 'react';
import './Catalog.scss';
import ProductBox from './ProductBox/ProductBox'

class Catalog extends React.Component{

  

    render(){
let number = 1;
let productBoxes = this.props.products.map((product)=>{
    number++
    return <ProductBox 
    
    productBoxColSize={this.props.productBoxColSize} 
    product={product}
    handleAddingItem={this.props.handleAddingItem}
    key={`product-box${number}`}
    />
})

        return(
            <div id='catalog-body' className={`${this.props.catalogColSize} catalog`}>
<div className='row'>
{productBoxes}
</div>

            </div>
        )
    }


}

export default Catalog;