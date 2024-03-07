import BorderCountryLink from './BorderCountryLink';

function CountryCardDetail({ country }) {
	return (
		<div>
			<img
				className='mx-auto shadow-sm'
				src={country.flags.png}
				alt={country.flags.alt}
			/>
			<h2 className='text-lg font-bold pb-4 pt-6'>{country.name.common}</h2>
			<div className='flex flex-col gap-1 mb-10'>
				<p className='font-semibold'>
					Native Name:{' '}
					<span className='font-normal'>
						{Object.values(country.name.nativeName)
							.map(c => c.common)
							.join(', ')}
					</span>
				</p>
				<p className='font-semibold'>
					Population: <span className='font-normal'>{country.population}</span>
				</p>
				<p className='font-semibold'>
					Region: <span className='font-normal'>{country.region}</span>
				</p>
				<p className='font-semibold'>
					Sub Region: <span className='font-normal'>{country.subregion}</span>
				</p>
				<p className='font-semibold'>
					Capital: <span className='font-normal'>{country.capital}</span>
				</p>
			</div>
			<div className='flex flex-col gap-1 mb-10'>
				<p className='font-semibold'>
					Top Level Domain: <span className='font-normal'>{country.tld}</span>
				</p>
				<p className='font-semibold'>
					Currencies:{' '}
					<span className='font-normal'>
						{Object.values(country.currencies)
							.map(c => c.name)
							.join(', ')}
					</span>
					;
				</p>
				<p className='font-semibold'>
					Languages:{' '}
					<span className='font-normal'>
						{Object.values(country.languages).join(', ')}
					</span>
				</p>
			</div>
			<div className='flex flex-col gap-1 mb-10'>
				<p className='font-semibold'>Border Countries:</p>
				<div className='flex gap-2 flex-wrap'>
					{country.borders ? (
						country.borders.map(c => (
							<BorderCountryLink key={c} countryCode={c} />
						))
					) : (
						<p>No border countries</p>
					)}
				</div>
			</div>
		</div>
	);
}

export default CountryCardDetail;
