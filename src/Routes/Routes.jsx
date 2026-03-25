import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../pages/Home/Home';
import Root from '../pages/Root/Root';
import About from '../pages/About/About';
import AppDetails from '../pages/AppDetails/AppDetails';
import AllApps from '../pages/AllApps/AllApps';
import InstalledApps from '../pages/InstalledApps/InstalledApps';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const appLoader = async () => {
	const res = await fetch('/appStoreData.json');
	return res.json();
};


const router = createBrowserRouter([

	{
		path: "/",
		Component: Root,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				index: true,

				Component: Home
			},
			{
				path: "/appDetails/:id",
				loader: appLoader,
				Component: AppDetails
			},
			{
				path: "allApps",
				loader: appLoader,
				Component: AllApps
			},
			{
				path: "/installedApps",
				loader: appLoader,
				Component: InstalledApps
			}
			
		]
	}

])



export default router;