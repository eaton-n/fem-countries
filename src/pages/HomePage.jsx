import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import useFetchCountries from '../hooks/useFetchCountries';
import CountrySearch from '../components/CountrySearch';
import RegionFilter from '../components/RegionFilter';
import CountryCard from '../components/CountryCard';

function HomePage() {
	const [currentRegion, setCurrentRegion] = useState('Asia');
	const [regions, setRegions] = useState([
		'Africa',
		'America',
		'Asia',
		'Europe',
		'Oceania',
	]);

	const [test, setTest] = useState({
		region: currentRegion,
		fields: ['name', 'flags', 'population', 'region', 'capital'],
	});

	useEffect(() => {
		setTest({
			region: currentRegion,
			fields: ['name', 'flags', 'population', 'region', 'capital'],
		});
	}, [currentRegion]);

	const { data, loading, error } = useFetchCountries(test);

	if (loading) {
		return <p>Loading</p>;
	}
	if (error) {
		return <p>{error}</p>;
	}
	if (data) {
		const countryCards = data.map(c => {
			return <CountryCard key={c.name.common} country={c} />;
		});
		return (
			<>
				<Header />
				<CountrySearch />
				<RegionFilter
					regions={regions}
					currentRegion={currentRegion}
					setCurrentRegion={setCurrentRegion}
				/>
				{countryCards}
			</>
		);
	}
}

export default HomePage;
