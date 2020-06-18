import React from 'react';
import './App.scss';
import products from './resources/products';


// IMPORT COMPONENTS
import Catalog from './Components/Catalog/Catalog';
import Cart from './Components/Cart/Cart';
import Nav from './Components/Nav/Nav';



class App extends React.Component {

constructor(props){
  super(props)
  this.state = {
    products: [...products],
    selectedProducts:[],
    productBoxColSize: 'col-md-4 col-xs-6',
    catalogColSize: 'col-md-12 col-xs-12',
    showingCart: false,
    totalPrice: 0,
    totalQuantity: 0
  }
this.handleAddingItem = this.handleAddingItem.bind(this);
this.handleHideShoppingCart = this.handleHideShoppingCart.bind(this);
this.isAlredyInCart = this.isAlredyInCart.bind(this);
this.handlePriceIncrease = this.handlePriceIncrease.bind(this);
this.handlePriceDecrease = this.handlePriceDecrease.bind(this);
this.handleRemoveItem = this.handleRemoveItem.bind(this);
this.handlePriceDecreaseMultiply = this.handlePriceDecreaseMultiply.bind(this);
this.addTotalQuantity = this.addTotalQuantity.bind(this);
this.decreaseTotalQuantity = this.decreaseTotalQuantity.bind(this);
this.handleRemoveAll = this.handleRemoveAll.bind(this);
this.handleDisplayShoppingCart = this.handleDisplayShoppingCart.bind(this);
this.handleShowConditional = this.handleShowConditional.bind(this);
}

//DISPLAY SHOPPING CART



handleDisplayShoppingCart(){
  this.setState({
    productBoxColSize: 'col-md-6',
    catalogColSize: 'col-md-8 col-xs-12',
    showingCart: true,
  })
}

handleHideShoppingCart(){
  this.setState({
    productBoxColSize: 'col-md-4 col-xs-6',
    catalogColSize: 'col-md-12 col-xs-12',
    showingCart: false,
  })
}

handleShowConditional(){
  if(this.state.showingCart){
    this.handleHideShoppingCart()
  }else{
    this.handleDisplayShoppingCart();
  }
}


//HANDLE QUANTITY OF TOTAL ITEMS
addTotalQuantity(){
  let fixedQuantity = this.state.totalQuantity + 1;
  this.setState({
    totalQuantity : fixedQuantity
  });
  }


decreaseTotalQuantity(){
  let fixedQuantity = this.state.totalQuantity - 1;
  this.setState({
    totalQuantity : fixedQuantity
  });
  }


//INCREASE TOTAL
handlePriceIncrease(price){
  let fixedTotal = this.state.totalPrice + price;
  this.setState({
    totalPrice : fixedTotal
  });
  }

//DECREASE TOTAL
handlePriceDecrease(price){
  let fixedTotal = this.state.totalPrice - price;
  this.setState({
    totalPrice : fixedTotal
  });
}

//DECREASE MULTIPLE ELEMENTS 
handlePriceDecreaseMultiply(quantity, price){
let totalDecrease = price * quantity;
return totalDecrease;
}



// CHECK IF ITEM IS ALREADY IN CART
isAlredyInCart(id){


let isIdFound = true;

let selectedProducts = [...this.state.selectedProducts];

  if (selectedProducts.length === 0){
    isIdFound = true;
  }else{
    for(let i = 0; i < selectedProducts.length; i++){

if(selectedProducts[i].id === id){
  return false;
}
    }
  }


return isIdFound;

}

//ADD ITEM TO CART
handleAddingItem(id){
let fixedSelectedProducts = [...this.state.selectedProducts];
let isInCart = this.isAlredyInCart(id);

if (isInCart === true) {
  let addedItem = this.state.products.find(product =>{
    return product.id === id;
  })

fixedSelectedProducts = [...fixedSelectedProducts, addedItem];
this.handlePriceIncrease(addedItem.price);
this.addTotalQuantity();

}

this.setState({
  selectedProducts:fixedSelectedProducts
});

}

//REMOVE ITEM FROM CART
handleRemoveItem(id, quantity){

let fixedTotalQuantity = this.state.totalQuantity - quantity;

  let itemToRemove = this.state.selectedProducts.find(product =>{
    return product.id === id;})
  let fixedSelectedProducts = [...this.state.selectedProducts];

  let totalToRemove = this.handlePriceDecreaseMultiply(quantity, itemToRemove.price);
  this.handlePriceDecrease(totalToRemove);

fixedSelectedProducts.splice(fixedSelectedProducts.indexOf(itemToRemove), 1);

this.setState({
  selectedProducts: fixedSelectedProducts,
  totalQuantity: fixedTotalQuantity
})
}

//REMOVE ALL ITEMS
handleRemoveAll(){
this.setState({
  selectedProducts:[],
  totalPrice: 0,
  totalQuantity: 0
})
}



  render(){


    let showingCart
    
    if(this.state.showingCart){
      showingCart = <Cart 
      totalPrice={this.state.totalPrice}
      selectedProducts = {this.state.selectedProducts}
      handlePriceIncrease = {this.handlePriceIncrease}
      handlePriceDecrease = {this.handlePriceDecrease}
      handleRemoveItem = {this.handleRemoveItem}
      addTotalQuantity = {this.addTotalQuantity}
      decreaseTotalQuantity = {this.decreaseTotalQuantity} 
      handleRemoveAll = {this.handleRemoveAll}
      handleHideShoppingCart = {this.handleHideShoppingCart}
      />
    }

    return (
      <div className="App">
            <Nav 
            totalQuantity = {this.state.totalQuantity}
            handleShowConditional = {this.handleShowConditional}
            />
  <div className='container'>

  <div className='row'>
  
<Catalog 
products={this.state.products}
catalogColSize={this.state.catalogColSize}
productBoxColSize={this.state.productBoxColSize}
handleAddingItem={this.handleAddingItem}
/>

{showingCart}

  </div>
  
  </div>
  
       
      </div>
    );

  }
 
}

export default App;
