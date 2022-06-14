import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/register' activeStyle>
			Register
		</NavLink>
		<NavLink to='/product' activeStyle>
			Product Details
		</NavLink>
		<NavLink to='/status' activeStyle>
			Status 
		</NavLink>
		</NavMenu>
		
	
	</Nav>
	</>
);
};

export default Navbar;
