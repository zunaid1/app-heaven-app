import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer';
import backImage from '../../assets/hero.png';



const Home = () => {
	const [appData, setAppData] = useState([]);

	useEffect(() => {
		fetch("appStoreData.json")
			.then(res => res.json())
			.then(data => setAppData(data))

	}, [])

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
			<h1 className='text-2xl text-center font-bold'> Trending Apps: {appData.length}</h1>
			

		</div>
	);
};

export default Home;