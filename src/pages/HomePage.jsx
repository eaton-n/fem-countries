import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import useFetchCountryData from '../hooks/useFetchCountryData';
import CountrySearch from '../components/CountrySearch';
import RegionFilter from '../components/RegionFilter';
import CountryCard from '../components/CountryCard';

function HomePage() {
	const [currentRegion, setCurrentRegion] = useState();
	const [regions, setRegions] = useState([
		'Africa',
		'America',
		'Asia',
		'Europe',
		'Oceania',
	]);

	const [url, setUrl] = useState(
		`all?fields=name,flags,population,region,capital`
	);

	useEffect(() => {
		if (currentRegion) {
			setUrl(
				`region/${currentRegion}?fields=name,flags,population,region,capital`,
				[currentRegion]
			);
		}
	}, [currentRegion]);

	const { data, loading, error } = useFetchCountryData(url);
	let countryCards = <p>No countries :(</p>;
	if (data) {
		countryCards = data.map(c => {
			return <CountryCard key={c.name.common} country={c} />;
		});
	}

	return (
		<div className='bg-gray-50'>
			<Header />
			<CountrySearch />
			<RegionFilter
				regions={regions}
				currentRegion={currentRegion}
				setCurrentRegion={setCurrentRegion}
			/>
			{loading && <p>Loading</p>}
			{error && <p>{error}</p>}
			{data && <div className='flex flex-col gap-4 '>{countryCards}</div>}
		</div>
	);
}

export default HomePage;
