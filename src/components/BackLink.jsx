import React from 'react';
import { Link } from 'react-router-dom';

function BackLink() {
	return (
		<Link className='ml-4 px-4 py-4 shadow-md' to={`/`}>
			Back
		</Link>
	);
}

export default BackLink;
