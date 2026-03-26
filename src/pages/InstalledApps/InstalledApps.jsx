import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { addToInstallationList, getInstallationList } from '../../utility/addToDB';
import InstallAppsCard from '../../components/InstallAppsCard';
import { toast, ToastContainer } from 'react-toastify';

const InstalledApps = () => {
	const [allApps, setAllApps] = useState([])
	const [installedApps, setInstalledApps] = useState([])
	const data = useLoaderData();
	//console.log(data);
	const [sortValue, setSortValue] = useState("");


	useEffect(() => {

		setAllApps(data);

		const storedApps = getInstallationList();

		const installed = data.filter(app => storedApps.includes(app.id));

		setInstalledApps(installed);

	}, [data])




	const handleUninstallButton = (id) => {

		const storedApps = getInstallationList();

		const remainingApps = storedApps.filter(appId => appId !== id);

		localStorage.setItem("installList", JSON.stringify(remainingApps));

		const updatedInstalled = allApps.filter(app =>
			remainingApps.includes(app.id)
		);

		setInstalledApps(updatedInstalled);

		toast.warning(`App Uninstalled`, {
			position: "top-right",
			autoClose: 2000,
			theme: "colored"
		});
	}


	const handleChange = (e) => {

		const value = e.target.value;

		setSortValue(value);

		let sortedApps = [...installedApps];

		if (value === "rating") {
			sortedApps.sort((a, b) => b.ratingAvg - a.ratingAvg);
		}

		if (value === "size") {
			sortedApps.sort((a, b) => b.size - a.size);
		}

		setInstalledApps(sortedApps);
	}

	return (
		<div className='bg-slate-100 py-5'>
			<ToastContainer />
			{
				installedApps.length > 0 ? (
					<div>
						<section
				onChange={handleChange}
				value={sortValue}


			>


				<div className='text-center space-y-5'>
					<h1 className=' font-bold text-4xl'>Your Installed Apps</h1>

					<p className='text-xl  text-slate-500'>Explore All Trending Apps on the Market developed by us</p>
				</div>





			</section>

			<section>
				<div className='flex justify-between items-center'>
					<h2 className='font-bold'>{installedApps.length} Apps Found</h2>

					<select
									className="select select-bordered w-40" 
									onChange={handleChange}
									defaultValue="size"
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



				)




					: (


						<div className="text-center py-10">

							<h2 className="text-2xl font-semibold text-gray-500">
								No Apps Installed
							</h2>

							<p className="text-gray-400 mt-2">
								You haven't installed any apps yet. Install apps to see them here.
							</p>

						</div>


					)

			}








		</div>
	);
};

export default InstalledApps;