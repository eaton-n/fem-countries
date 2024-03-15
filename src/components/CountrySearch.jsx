import React from 'react';
import SearchIcon from './SearchIcon';

function CountrySearch({ filter, setFilter }) {
	return (
		<div>
			<form
				action=''
				className='flex flex-row items-center px-1 py-1 m-4 shadow-sm bg-white'
			>
				<SearchIcon />
				<input
					type='text'
					name=''
					id=''
					className='px-5 py-3'
					placeholder='Search for a country'
					value={filter}
					onChange={e => setFilter(e.target.value)}
				/>
			</form>
		</div>
	);
}

export default CountrySearch;
