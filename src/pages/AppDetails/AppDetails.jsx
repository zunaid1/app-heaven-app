import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { FaDownload } from "react-icons/fa6";
import { formatNumber } from '../../utility/FormatNumber';
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { TbFileLike } from "react-icons/tb";






const AppDetails = () => {
	const { id } = useParams();
	const appId = parseInt(id);



	const data = useLoaderData();

	const singleApp = data.find(app => app.id === appId);
	//console.log(singleApp);
	const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = singleApp;


	return (
		<div>
			{/* Top Section */}
			<section className='flex gap-2 bg-slate-100 p-5'>
				<img className='w-3/12' src={image} alt="" />

				<div className='w-9/12 '>
					<h1 className='text-2xl font-bold'>{title}</h1>
					<p className='text-slate-500'>Developed by: <span className='font-bold text-indigo-600'>{companyName}</span></p>

					<hr className='border-2 text-slate-300' />

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

				</div>


			</section>


		</div>
	);
};

export default AppDetails;