import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Outlet } from 'react-router';

const Root = () => {
	return (
		<div className='min-h-screen flex flex-col'>

			<header className=''>
				<Navbar />
			</header>

			<main className="flex-1 overflow-y-auto pt-16 pb-14">
				<div className='max-w-7xl mx-auto px-4'>
					<Outlet></Outlet>
				</div>
				
			</main>

			<div className='fixed bottom-0 left-0 w-full'>
				<Footer></Footer>
			</div>

		</div>
	);
};

export default Root;