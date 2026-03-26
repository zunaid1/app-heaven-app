import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { Link, Outlet } from 'react-router';
import Footer from '../../components/Footer';
import backImage from '../../assets/hero.png';
import AppCard from '../../components/AppCard';
import StatsSection from '../../components/StatsSection';
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";



const Home = () => {
	const [appData, setAppData] = useState([]);
	const [topApps, setTopApps] = useState([]);


	useEffect(() => {
		fetch("appStoreData.json")
			.then(res => res.json())
			.then(data => setAppData(data))


		if (appData.length > 0) {
			const sorted = [...appData].sort((a, b) => b.ratingAvg - a.ratingAvg).slice(0, 8);

			setTopApps(sorted);
		}

	}, [appData])

	return (
		<div>

			<div className='flex justify-center items-center flex-col max-w-7xl mx-auto px-4'>
				<h1 className='text-6xl font-bold'>We Build</h1>
				<h1 className='text-6xl font-bold'><span className='text-purple-700'>Productive</span> Apps</h1>
				<p className='my-5 text-slate-600 text-center '>At App Heaven, we craft innovative apps designed to make everyday life simpler, smarter, and more exiting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>


				<div className='flex flex-row gap-5 space-y-5 my-5'>
					<a className='btn text-xl' target='_blank' href="https://play.google.com/store/apps"><IoLogoGooglePlaystore color='blue' />
						Google Play</a>

					<a className='btn text-xl' target='_blank' href="https://www.apple.com/app-store/"><FaAppStoreIos color='blue' />

						App Store</a> 
				</div>

			</div>

			{/* Hero */}


			<div className='max-w-7xl mx-auto px-4'>
				<img src={backImage} alt="" />
				</div>


			<StatsSection></StatsSection>



			{/* Time Counter */}
			<section className='flex flex-col my-5 justify-center items-center'>

				<div className='my-5 py-5'>
					<h1 className='text-2xl text-center font-bold'> Trending Apps: {topApps.length}</h1>
				<p>Explore All Trending Apps on the Market developed by us</p>
				</div>

				{/* Trending Apps Container */}
				<div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-5'>
					{
						topApps.map(appCard =>
							<AppCard
								key={appCard.id}
								appCard={appCard}>

							</AppCard>)
					}

				</div>


				<Link className='my-5 className="flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl 
    bg-gradient-to-r from-blue-500 to-purple-600 
    hover:from-purple-600 hover:to-blue-500
    transition-all duration-300 
    shadow-lg hover:shadow-2xl 
    hover:scale-105" ' to={"allApps"}>
					Show All
				</Link>

			</section>


			

		</div>
	);
};

export default Home;