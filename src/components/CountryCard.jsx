import { Link } from 'react-router-dom';

function CountryCard({ country }) {
	return (
		<div className='m-2 shadow-md w-fit mx-auto rounded-md overflow-hidden bg-white'>
			<img
				className='mx-auto shadow-sm '
				src={country.flags.png}
				alt={country.flags.alt}
			/>
			<div className='p-6'>
				<h2 className='font-bold text-lg pb-4'>
					<Link to={`/countryDetail/${country.name.common}`}>
						{country.name.common}
					</Link>
				</h2>
				<div className='flex flex-col gap-1 mb-10'>
					<p className='font-semibold'>
						population:{' '}
						<span className='font-normal'>
							{country.population.toLocaleString()}
						</span>
					</p>
					<p className='font-semibold'>
						region: <span className='font-normal'>{country.region}</span>
					</p>
					<p className='font-semibold'>
						Capital: <span className='font-normal'>{country.capital}</span>
					</p>
				</div>
			</div>
		</div>
	);
}

export default CountryCard;
