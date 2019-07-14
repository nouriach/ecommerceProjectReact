import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';

/**
Instead of writing out all of the product data in the 'state' below, we can import the array 'storeProducts'
from the data.js file and then stick that in the state. It looks a lot cleaner and works the same way.
We can now work with this array in the same way we usually would.
**/

//import {storeProducts} from '../data';
import {ProductConsumer} from '../context';


class ProductList extends Component {
//	state= {
//		products: storeProducts
//	};
	render () {	
//		console.log(this.state.products);
		return (
			<React.Fragment>
				<div className="py-5">

					<div className="container">
						<Title name="our" title="products" />
						
						<div className="row">
							
							<ProductConsumer>
								{(value)=> {
									return value.products.map( product => {
										return <Product key={product.id} product={product} />
									})
								}}
							</ProductConsumer>

						</div>

					</div>

				</div>
			</React.Fragment>
		)
	}
}


export default ProductList;