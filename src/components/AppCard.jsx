import React from 'react';

const AppCard = ({ appCard }) => {

//console.log(appCard);
	const { id, image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = appCard;


	return (
		<div className="card bg-base-100  shadow-sm">
			<figure>
				<img
					src={image}
					alt="Shoes" />
			</figure>
			<div className="card-body">
			<h2 className="card-title">{title}</h2>
				
				<div className="flex flex-row items-center justify-between  border-2">
					<button className="btn btn-primary">B</button>
					<button className="btn btn-primary">B</button>
				</div>
			</div>
		</div>
	);
};

export default AppCard;




