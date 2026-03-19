import React from 'react';
import logo from '../assets/logo-only.png';




const LogoOnly = () => {
	return (
		<>
			<a className="btn btn-ghost text-xl" href='#'>
				<img className='w-12 h-12' src={logo} alt="" />

			</a>
		</>
	);
};

export default LogoOnly;