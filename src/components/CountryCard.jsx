import { Link } from 'react-router-dom';

function CountryCard({ country }) {
	return (
		<div>
			<img src={country.flags.png} alt={country.flags.alt} />
			<h2>
				<Link to={`/countryDetail/${country.name.common}`}>
					{country.name.common}
				</Link>
			</h2>
			<div>
				<p>
					population: <span>{country.population}</span>
				</p>
				<p>
					region: <span>{country.region}</span>
				</p>
				<p>
					Capital: <span>{country.capital}</span>
				</p>
			</div>
		</div>
	);
}

export default CountryCard;
