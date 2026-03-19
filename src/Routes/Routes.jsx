import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../pages/Home/Home';
import Root from '../pages/Root/Root';



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
			
		]
	}

])



export default router;