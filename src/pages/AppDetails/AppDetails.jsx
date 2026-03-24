import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { FaDownload } from "react-icons/fa6";
import { formatNumber } from '../../utility/FormatNumber';
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { TbFileLike } from "react-icons/tb";
import { FcViewDetails } from "react-icons/fc";

import { ToastContainer, toast } from 'react-toastify';


import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	CartesianGrid
} from "recharts";
import { addToInstallationList, appIsInstalled } from '../../utility/addToDB';




const AppDetails = () => {

	const { id } = useParams();
	const appId = parseInt(id);
	const [isInstalled, setIsInstalled] = useState(appIsInstalled(appId));

	const handleInstallation = (id) => {

		if (isInstalled) return;
		addToInstallationList(id);

		setIsInstalled(true);

		toast.success(`Installing....`, {
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			theme: "light"
		});


	}

	//const isInstalled = appIsInstalled(appId);



	const data = useLoaderData();

	const singleApp = data.find(app => app.id === appId);
	//console.log(singleApp);
	const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = singleApp;


	return (


		<div>

			<ToastContainer />

			{/* Top Section */}
			<section className='flex gap-6 bg-slate-100 p-5 border-b-4 border-gray-300 my-6'>

				<img className='w-50 h-50 rounded-full' src={image} alt="" />

				<div className='w-9/12 '>

					<h1 className='text-2xl font-bold'>{title}</h1>
					<p className='text-slate-500'>Developed by: <span className='font-bold text-indigo-600'>{companyName}</span></p>

					<hr className='border-2 text-slate-300 my-5' />

					{/* summary Section */}
					<div className='flex justify-between gap-5 px-5 items-center'>
						<div className='flex flex-col justify-center items-center my-3 space-y-1'>
							<FaDownload className='text-green-600' />
							<p>Downloads</p>
							<p className='font-bold text-2xl'>{formatNumber(downloads)}</p>
						</div>

						<div className='flex flex-col justify-center my-3 space-y-1 items-center'>
							{ratingAvg >= 4 ? <FaStar className='text-orange-400 text-2xl' />
								: <FaStarHalfStroke className='text-orange-400 text-2xl' />
							}
							<p>Ratings</p>
							<p className='font-bold text-2xl'>{formatNumber(ratingAvg)}</p>
						</div>

						<div className='flex flex-col justify-center my-3 space-y-1 items-center'>
							<TbFileLike className='text-purple-600 text-2xl' />
							<p>Total Reviews</p>
							<p className='font-bold text-2xl'>{formatNumber(reviews)}</p>
						</div>

					</div>


					{
						isInstalled ? <button disabled className='btn rounded bg-gray-400  text-xl text-black py-3 px-6'>Installed ✓ </button>

							: <button onClick={() => handleInstallation(appId)} className='btn rounded bg-green-600  text-xl text-white py-3 px-6'>Install Now ({size} MB)</button>
					}


					{/* <hr className='border-2 text-slate-300 my-8' /> */}


				</div>


			</section>


			{/* Rating Section */}
			<section>
				<h1 className='text-2xl font-bold'>Ratings</h1>
				<div className='w-full h-75'>
					<ResponsiveContainer>
						<BarChart
							data={data}
							layout="vertical"
							margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
						>

							<CartesianGrid strokeDasharray="3 3" />

							<XAxis
								type="number"
								tickFormatter={formatNumber}
							/>

							<YAxis
								dataKey="name"
								type="category"
							/>

							<Tooltip
								formatter={(value) => formatNumber(value)}
							/>

							<Bar
								dataKey="count"
								fill="#f97316"
								radius={[0, 5, 5, 0]}
							/>

						</BarChart>



					</ResponsiveContainer>

				</div>

			</section>


			{/* details  */}
			<section className='text-xl'>
				<FcViewDetails />

				{
					description
				}

			</section>

		</div>
	);
};

export default AppDetails;