import React from 'react';
import { NavLink } from 'react-router';
import Logo from './Logo';
import { FaHome } from "react-icons/fa";
import GradientButton from './GradientButton';




const Navbar = () => {
	const NavItems = <>
		<NavLink className="mr-6 text-xl font-bold" to="/" ><i class="fa-solid fa-house"></i> Home</NavLink>
		<NavLink className="mr-6 text-xl font-bold" to="/about"> <i class="fa-brands fa-app-store"></i> Apps</NavLink>
		<NavLink className="mr-6 text-xl font-bold" to="/"><i class="fa-solid fa-download"></i> Installation </NavLink>
	</>


	return (
		<div className="navbar bg-base-100 shadow-sm">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
					</div>
					<ul
						tabIndex="-1"
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
						{
							NavItems
						}


					</ul>
				</div>
				{/* <a className="btn btn-ghost text-xl">
					<img className='w-12 h-12' src={logo} alt="" /> <span className='font-bold'>App</span> <span className='text-blue-900 font-bold'>Heaven</span>
				</a> */}
				<Logo></Logo>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					{
						NavItems
					}
				</ul>
			</div>
			<div className="navbar-end">
				<GradientButton></GradientButton>
			</div>
		</div>
	);
};

export default Navbar;