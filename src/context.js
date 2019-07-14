import React, { Component } from 'react'
import {storeProducts, detailProduct} from './data'

/** 
in this file we are going to be working with a context api to allow us to access the product
data information whenever we need it.

We don't need to import anything as React already has a method for it (see React.createContext())

Whenever we create a context component we need to utilise two things: a Provider and a Consumer. 
**/

const ProductContext = React.createContext();
// Provider
// Consumer

class ProductProvider extends Component {
	state = {
		products: [],
		detailProduct: detailProduct
	};

/****
The below method is called immedediately to run the below setProducts function before the page is loaded.
It therefore will populate the screen with the data. Technically if this wasn't used the asets won't appear 
on the screen because the empty array in the state hasn't been opulated yet.
***/

componentDidMount() {
	this.setProducts();
}

/***

At the moment, any time we use the data.js info we are simply referencing it and, if we manipulate it, 
we edit the values within the data.js file.
Below the function will speak to the data.js file, but will inherit its values so we can update them
whilst maintaing the integrity of the source info.

Products is an empty array. We loop through the imported storeProducts,clone the data, and then add
it to our new empty array which lives in the state. We are getting a new set of values instead of 
copying them.

***/

setProducts = () => {
	let products = [];
	storeProducts.forEach(item => {
		const singleItem = {...item};
		products = [...products, singleItem];
	})
	this.setState(() => {
		return {products}
	})
}

handleDetail = () => {
	console.log('hello from detail')
}

addToCart = () => {
	console.log('hello from cart')
};

	render () {
		return (
			<ProductContext.Provider value={{
			...this.state,
			handleDetail: this.handleDetail,
			addToCart: this.addToCart
			}}>
		
				{this.props.children}
			</ProductContext.Provider>	
		)	
	}
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };

