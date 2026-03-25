import React from 'react';
import { FaDownload } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { formatNumber } from '../utility/FormatNumber';
import { Link } from 'react-router';



const InstallAppsCard = ({ appCard, handleUninstallButton }) => {
	const { id, image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = appCard;

	return (
		<>


			<div className="flex flex-row bg-white  shadow-sm transition duration-300 hover:scale-102 hover:shadow-2xl w-full h-40 items-center">
				<div className='w-3/12 '>
					<img className='rounded-xl h-35'
						src={image}
						alt="Shoes" />
				</div>


				<div className="w-7/12">
					<h2 className="text-left text-xl font-bold">{title}</h2>

					<div className="flex flex-row items-center justify-start gap-5">
						<div className='flex gap-1 text-green-600 bg-slate-200 p-2'>
							<FaDownload color='' />
							{formatNumber(downloads)}

						</div>



						<div className="flex gap-1 text-orange-500 bg-orange-100 p-2">
							{ratingAvg >= 4 ? <FaStar /> : <FaStarHalfAlt />}
							{ratingAvg}</div>
					</div>
				</div>

				<div className='w-2/12'>
					<button onClick={() => { handleUninstallButton(id) }} className='bg-green-500 p-3 text-xl text-white font-bold'>Uninstall</button>
				</div>
			</div>


		</>
	);
};

export default InstallAppsCard;