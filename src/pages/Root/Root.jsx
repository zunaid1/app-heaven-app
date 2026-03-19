import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Outlet } from 'react-router';

const Root = () => {
	return (
		<div className=''>
			<Navbar></Navbar>
			<Outlet></Outlet>
 			<Footer></Footer>
		</div>
	);
};

export default Root;