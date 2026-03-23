import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../pages/Home/Home';
import Root from '../pages/Root/Root';
import About from '../pages/About/About';
import AppDetails from '../pages/AppDetails/AppDetails';



const router = createBrowserRouter([

	{
		path: "/",
		Component: Root,
		errorElement: <p>Error Page</p>,
		children: [
			{
				index: true,
				path: "/",
				Component: Home
			},
			{
				path: "/appDetails/:id",
				loader: () => fetch('appStoreData.json'),
				Component: AppDetails
			}
			
		]
	}

])



export default router;