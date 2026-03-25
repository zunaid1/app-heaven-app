import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import errorImage from '../../assets/error-404.png';
import { Link } from 'react-router';



const ErrorPage = () => {
	return (
		<div className='min-h-screen flex flex-col'>

			<header className='sticky top-0 left-0'>
				<Navbar />
			</header>

			<main className="flex-1 overflow-y-auto pt-16 pb-14">
				<div className='max-w-7xl mx-auto px-4 border text-center'>
					<img className='text-center mx-auto' src={errorImage} alt="" />

					<div className='space-y-5 mt-10'>
						<h1 className='text-5xl text-center font-bold'>Oops, page not found!</h1>
						<p className='text-slate-400'>The page you are looking for is not available.</p>

						<Link className='btn btn-outline btn-primary' to={"/"}>Go Back</Link>

					</div>
				</div>

			</main>

			<div className='bottom-0 left-0 w-full'>
				<Footer></Footer>
			</div>

		</div>
	);
};

export default ErrorPage;