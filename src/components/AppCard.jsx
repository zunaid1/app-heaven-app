import React from 'react';

import { FaDownload } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { formatNumber } from '../utility/FormatNumber';
import { Link } from 'react-router';



const AppCard = ({ appCard }) => {

//console.log(appCard);
	const { id, image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = appCard;


	return (
		<Link to={`/appDetails/${id}`}>
			<div className="card bg-base-200  shadow-sm transition duration-300 hover:scale-103 hover:shadow-2xl">
			<figure>
					<img className='rounded w-8/12'
					src={image}
					alt="Shoes" />
			</figure>
			<div className="card-body">
					<h2 className="text-center text-xl font-bold">{title}</h2>

					<div className="flex flex-row items-center justify-between">
						<div className='flex gap-1 text-green-600 bg-slate-200 p-2'>
							<FaDownload color='' />
							{formatNumber(downloads)}

						</div>



						<div className="flex gap-1 text-orange-500 bg-orange-100 p-2">
							{ratingAvg >= 4 ? <FaStar /> : <FaStarHalfAlt />}
							{ratingAvg}</div>
				</div>
			</div>
		</div>

		</Link>
	);
};

export default AppCard;




