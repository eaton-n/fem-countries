import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import CountryDetailPage from './pages/CountryDetailPage.jsx';

const router = createBrowserRouter([
	{
		path: '/fem-countries/',
		element: <App />,
		errorElement: <ErrorPage />,
	},
	{
		path: 'countryDetail/:countryName',
		element: <CountryDetailPage />,
		// errorElement: <ErrorPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
