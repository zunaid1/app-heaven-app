import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import AppCard from '../../components/AppCard';
import notFoundImg from '../../assets/App-Error.png';


const AllApps = () => {
	const data = useLoaderData([]);

	const [searchText, setSearchText] = useState("");
	const [filteredApps, setFilteredApps] = useState(data);

	const handleSearchBox = (e) => {
		const value = e.target.value;
		setSearchText(value);

		const searchResult = data.filter(app =>
			app.title.toLowerCase().includes(value.toLowerCase()) ||
			app.companyName.toLowerCase().includes(value.toLowerCase())
		);

		setFilteredApps(searchResult);

	}


	return (
		<div>
			{/* top  Sectpm */}
			<section className='flex flex-col justify-center items-center space-y-5'>
				<h1 className='text-5xl font-bold'>Our All Applications</h1>
				<p>Explore All Apps on the Market developed by us. We code for Millions</p>



				<div className='w-full  flex flex-row justify-between items-center'>
					<h1 className='text-xl font-bold'>({filteredApps.length}) Apps Found</h1>

					<div className="relative w-80">

						<input 
							onChange={handleSearchBox}
							type="text"
							placeholder="Search..."
							className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
						/>

						<svg
							className="absolute left-3 top-3 w-5 h-5 text-gray-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M21 21l-4.35-4.35m1.85-5.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
							/>
						</svg>

					</div>
				</div>

			</section>


			{/* Apps Container */}
			<section className='my-5 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-5'>
				{
					filteredApps.length > 0 ? (

						filteredApps.map(appCard =>
						<AppCard
							key={appCard.id}
							appCard={appCard}>

						</AppCard>)

					) :
						(
							<div className="col-span-full text-center py-10 flex justify-center items-center">

								<img src={notFoundImg} alt="" />

							</div>

						)



				}
			</section>
		</div>
	);
};

export default AllApps;