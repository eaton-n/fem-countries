import { useEffect, useState } from 'react';
import CountryCardDetail from '../components/CountryCardDetail';
import CountrySearch from '../components/CountrySearch';
import Header from '../components/Header';
import useFetchCountryData from '../hooks/useFetchCountryData';
import { useParams } from 'react-router-dom';

function CountryDetailPage() {
	const { countryName } = useParams();
	const [requestUrl, setRequestUrl] = useState(
		`name/${countryName}?fullText=true`
		// `name/${countryName}?fields=name,flags,population,region,subregion,capital,currencies,languages,borders,tld`
	);
	const { data, loading, error } = useFetchCountryData(requestUrl);
	const [countryData, setCountryData] = useState();
	useEffect(() => {
		if (data != null) {
			setCountryData(<CountryCardDetail country={data[0]} />);
		}
	}, [data]);

	return (
		<>
			<Header />
			<CountrySearch />
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
