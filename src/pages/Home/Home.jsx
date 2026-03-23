import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer';
import backImage from '../../assets/hero.png';
import AppCard from '../../components/AppCard';



const Home = () => {
	const [appData, setAppData] = useState([]);
	const [topApps, setTopApps] = useState([]);


	useEffect(() => {
		fetch("appStoreData.json")
			.then(res => res.json())
			.then(data => setAppData(data))


		if (appData.length > 0) {
			//const sorted = [...appData].sort((a, b) => b.ratingAvg - a.ratingAvg).slice(0, 8);

			setTopApps(appData);
		}

	}, [appData])

	return (
		<div>

			<div className='flex justify-center items-center flex-col'>
				<h1>We Build</h1>
				<h1><span>Productive</span>Apps</h1>
				<p>At App Heaven, we craft innovative apps designed to make everyday life simpler, smarter, and more exiting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

				<div>
					<button>Google Play</button>
					<button>App Store</button>
				</div>

			</div>

			{/* Hero */}


			<div >
				<img src={backImage} alt="" />
				</div>






			{/* Time Counter */}
			<section>

				<h1 className='text-2xl text-center font-bold'> Trending Apps: {topApps.length}</h1>
				<p>Explore All Trending Apps on the Market developed by us</p>

				{/* Trending Apps Container */}
				<div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-2'>
					{
						topApps.map(appCard =>
							<AppCard
								key={appCard.id}
								appCard={appCard}>

							</AppCard>)
					}

				</div>

			</section>

			

		</div>
	);
};

export default Home;