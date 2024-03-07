import React from 'react';
import { Link } from 'react-router-dom';

function BorderCountryLink({ countryCode }) {
	return (
		<Link className='px-4 py-2 shadow-md' to={`/countryDetail/${countryCode}`}>
			{countryCode}
		</Link>
	);
}

//  https://restcountries.com/v3.1/alpha/bel < CCN3

export default BorderCountryLink;
