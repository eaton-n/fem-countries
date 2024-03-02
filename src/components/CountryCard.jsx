function CountryCard({ country }) {
	return (
		<div>
			<img src={country.flags.png} alt={country.flags.alt} />
			<h2>{country.name.common}</h2>
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
	);
}

export default CountryCard;
