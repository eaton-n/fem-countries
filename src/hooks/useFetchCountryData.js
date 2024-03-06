import { useEffect, useState } from 'react';

const API_URL = 'https://restcountries.com/v3.1/';

function useFetchCountryData(requestUrl) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const apiQuery = `${API_URL}${requestUrl}`;
				const res = await fetch(apiQuery);
				if (!res.ok) {
					throw new Error(`API request failed with status ${res.status}`);
				}
				const data = await res.json();
				setData(data);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [requestUrl]);
	return { data, loading, error };
}

export default useFetchCountryData;
