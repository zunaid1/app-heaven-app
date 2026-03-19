import React from 'react';
import logo from '../assets/logo-only.png';


const Logo = () => {
	

	return (
		<>
			<a className="btn btn-ghost text-xl" href='#'>
				<img className='w-12 h-12' src={logo} alt="" /> <span className='font-bold'>App</span> <span className='text-blue-900 font-bold'>Heaven</span>
			</a>
		</>
	);
};

export default Logo;