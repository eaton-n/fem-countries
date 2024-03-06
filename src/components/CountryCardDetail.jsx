function CountryCardDetail({ country }) {
	return (
		<div>
			<img src={country.flags.png} alt={country.flags.alt} />
			<h2>{country.name.common}</h2>
			<div>
				<p>
					Native Name:
					<span>
						{Object.values(country.name.nativeName)
							.map(c => c.common)
							.join(', ')}
					</span>
				</p>
				<p>
					Population: <span>{country.population}</span>
				</p>
				<p>
					Region: <span>{country.region}</span>
				</p>
				<p>
					Sub Region: <span>{country.subregion}</span>
				</p>
				<p>
					Capital: <span>{country.capital}</span>
				</p>
			</div>
			<div>
				<p>
					Top Level Domain: <span>{country.tld}</span>
				</p>
				<p>
					Currencies:
					<span>
						{Object.values(country.currencies)
							.map(c => c.name)
							.join(', ')}
					</span>
					;
				</p>
				<p>
					Languages: <span>{Object.values(country.languages).join(', ')}</span>
				</p>
			</div>
			<div>
				<p>Border Countries:</p>
				{country.borders ? (
					country.borders.map(c => <a key={c}>{c}</a>)
				) : (
					<p>No border countries</p>
				)}
			</div>
		</div>
	);
}

export default CountryCardDetail;
