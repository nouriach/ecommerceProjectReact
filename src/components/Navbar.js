import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg';

// We downloaded and the below through the terminal. 
import styled from 'styled-components'

class Navbar extends Component {
	render () {
		
		return (
			
			<NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
				
				<Link to = '/'>
					<img src={logo} alt="store" className="navbar-brand"/>
				</Link>
			
				<ul className="navbar-nav align-items-center">
					<li className = "nav-item ml-5">
						<Link to = "/" className = "nav-link">
							products
						</Link>
					</li> 
				</ul>
			
				<Link to = "/cart" className = "ml-auto">
					<ButtonContainer> 
						<span className="mr-2">
							<i className="fas fa-cart-plus" />
						</span>
						my cart
					</ButtonContainer>
				</Link>
			
			</NavWrapper>
		)
	}
}

/*** 
style the navbar using Styled Components, imported above. CSS is written in this file.

Important things to note:
	Interested syntax with the '&:' - It is essentially setting up an event to be attached on top
	of the pre-existing "state" which is in the first section.
	
	Once the CSS styles is given a name (through const), the name can then be called above to execute
	the style ( <ButtonContainer /> instead of the typical button tag) because the new variable name
	is made to equal a styled button.
	
	Each js file that uses styled components needs to import it at the top.
	
	We could also export the below stylings like:
		export const ButtonContainer
	
	And then import it into a separate file
		import { ButtonContainer } from './Navbar'
	
	We can then reuse the <ButtonContainer /> tag.
	
	'rem' target the route element, meaning if the user changes the root then our site is responsive.
	For reference: '1rem = 16px'
	
***/

const ButtonContainer = styled.button `
	text-transform: capitalize;
	font-size: 1.4rem;
	background: transparent;
	border: 0.05rem solid #009ffd;
	color: #009ffd;
	border-radius: 0.5rem;
	padding: 0.2rem;
	cursor: pointer;
	margin: 0.2rem 0.5rem 0.2rem;
	transition: all 0.5s ease-in-out;
&:hover {
	background: #009ffd;
	color: #2a2a72;
	}
&:focus {
	outline: none;
	}
`;

const NavWrapper = styled.nav `
	background: #2a2a72;
	.nav-link {
		color: #f3f3f3; !important;
		font-size: 1.3rem;
		text-transform: capitalize;
		}
`;
export default Navbar;