import { useEffect, useState } from 'react';
import CountryCardDetail from '../components/CountryCardDetail';
import Header from '../components/Header';
import useFetchCountryData from '../hooks/useFetchCountryData';
import { useParams } from 'react-router-dom';
import BackLink from '../components/BackLink';

function CountryDetailPage() {
	const { countryName } = useParams();
	const [requestUrl, setRequestUrl] = useState(
		`name/${countryName}?fields=name,flags,population,region,subregion,capital,currencies,languages,borders,tld`
	);
	const { data, loading, error } = useFetchCountryData(requestUrl);
	const [countryData, setCountryData] = useState(null);
	useEffect(() => {
		if (data != null) {
			setCountryData(<CountryCardDetail country={data[0]} />);
		}
	}, [data, countryName]);

	useEffect(() => {
		setRequestUrl(
			`name/${countryName}?fields=name,flags,population,region,subregion,capital,currencies,languages,borders,tld`
		);
	}, [countryName]);

	return (
		<>
			<Header />
			<BackLink />
			{loading && <p>loading...</p>}
			{error && <p>{error}</p>}
			{data && (
				<div className='flex flex-col mx-auto  items-center mt-10 w-5/6 '>
					{countryData}
				</div>
			)}
		</>
	);
}

export default CountryDetailPage;
