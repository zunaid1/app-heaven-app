import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { addToInstallationList, getInstallationList } from '../../utility/addToDB';
import InstallAppsCard from '../../components/InstallAppsCard';
import { toast, ToastContainer } from 'react-toastify';

const InstalledApps = () => {
	const [allApps, setAllApps] = useState([])
	const [installedApps, setInstalledApps] = useState([])
	const data = useLoaderData();
	console.log(data);
	const [sortValue, setSortValue] = useState("");


	useEffect(() => {
		setAllApps(data);
		const storedApps = getInstallationList();

		const installed = data.filter(app => storedApps.includes(app.id));

		setInstalledApps(installed);

	}, [data])

	const handleUninstallButton = (id) => {
		console.log("Uninstall Buttion Clicked: ", id);

		const storedApps = getInstallationList();

		const remainingApps = storedApps.filter(appId => appId !== id);
		localStorage.setItem("installList", JSON.stringify(remainingApps));
		//addToInstallationList(remainingApps);
		setInstalledApps(remainingApps);


		toast.success(`Uninstalling....`, {
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			theme: "colored"
		});

	}


	const handleChange = (e) => {
		setSortValue(e.target.value);
		console.log(e.target.value);


		//===================
		if (sortValue === "rating") {
			installedApps.sort((a, b) => b.ratingAvg - a.ratingAvg)
		}

		if (sortValue === "size") {
			installedApps.sort((a, b) => b.size - a.size)
		}
		//===================
	}



	return (
		<div className='bg-slate-100 py-5'>
			<ToastContainer />

			{/* Top Section */}
			<section
				onChange={handleChange}
				value={sortValue}


			>
				{/* Caption */}

				<div className='text-center space-y-5'>
					<h1 className=' font-bold text-4xl'>Your Installed Apps</h1>

					<p className='text-xl  text-slate-500'>Explore All Trending Apps on the Market developed by us</p>
				</div>




				{/* <h1>{allApps.length}</h1> */}
			</section>

			<section>
				<div className='flex justify-between items-center'>
					<h2 className='font-bold'>{installedApps.length} Apps Found</h2>

					<select
						className="select select-bordered w-40"
						onChange={(e) => setSortValue(e.target.value)}
					>

						<option disabled selected>
							Sort By
						</option>

						<option value="rating">
							Rating
						</option>

						<option value="size">
							Size
						</option>

					</select>

				</div>



				{/* Installed Apps Container */}
				<div className='my-5 grid grid-cols-1  gap-5'>
					{

						installedApps.map(appCard =>
							<InstallAppsCard
								handleUninstallButton={handleUninstallButton}
								key={appCard.id}
								appCard={appCard}>

							</InstallAppsCard>)
					}


				</div>





			</section>
		</div>
	);
};

export default InstalledApps;