import React from 'react';
import LogoOnly from './LogoOnly';
import { NavLink } from 'react-router';
import Logo from './Logo';

const Footer = () => {
	const NavItems = <>
		<NavLink className={({ isActive }) => (isActive ? 'text-indigo-500 border-b-3 border-indigo-500 mr-6 text-sm font-bold' : 'mr-6 text-xl font-bold')} to="/"><i className="fa-solid fa-house"></i> Home</NavLink>

		<NavLink className={({ isActive }) => (isActive ? 'text-indigo-500 border-b-3 border-indigo-500 mr-6 text-sm font-bold' : 'mr-6 text-xl font-bold')} to="/allApps"> <i className="fa-brands fa-app-store"></i> Apps</NavLink>

		<NavLink className={({ isActive }) => (isActive ? 'text-indigo-500 border-b-3 border-indigo-500 mr-6 text-sm font-bold' : 'mr-6 text-xl font-bold')} to="/installedApps"><i className="fa-solid fa-download"></i> Installation </NavLink>



	</>




	return (
		<footer className="footer sm:footer-horizontal bg-slate-200 text-base-content p-10 ">
			<aside>

				<Logo></Logo>					
			</aside>
			<nav>
				<ul >
					{
						NavItems
					}


				</ul>

			</nav>

		</footer>
	);
};

export default Footer;