import React from 'react';
import logo from '../assets/logo-only.png';
import { Link } from 'react-router';


const Logo = () => {
	

	return (

		<Link to="/">
			<a className="btn btn-ghost text-xl" href='#'>
				<img className='w-12 h-12' src={logo} alt="" /> <span className='font-bold'>App</span> <span className='text-blue-900 font-bold'>Heaven</span>
			</a>
		</Link>

	);
};

export default Logo;