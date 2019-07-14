/*******
N OURIACH
eCOMMERCE REACT PROJECT
JULY 2019
*****/


/*****
The component wasn't being acnowledged initially so I have had to comment out the initial import React below and add the import React {Component} line underneath.

https://stackoverflow.com/questions/46019268/why-is-component-not-defined

*****/

//import React from 'react';
import React, { Component } from 'react';

// after setting up our own router, we can now import the below to tie components to specific url paths.
import {Switch, Route} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

//boostrap has been installed and imported
import 'bootstrap/dist/css/bootstrap.min.css';

//import components
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';





class App extends Component {
	render () {
		return (
			
			<React.Fragment>
				<Navbar />
				
				<Switch>
			
			/**
			We have to use 'exact path', because otherwise '/' will always appear first and, therefore,
			will always display the Product List. It will never move on from the initial '/'
			**/
					<Route exact path="/" component = {ProductList} />
					<Route path="/details" component = {Details} />
					<Route path="/cart" component = {Cart} />
					<Route component = {Default} />

				</Switch>

			</React.Fragment>

		);
	}
}


export default App;
