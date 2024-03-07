function RegionFilter({ regions, currentRegion, setCurrentRegion }) {
	const regionOptions = regions.map(r => {
		return (
			<option key={r} value={r}>
				{r}
			</option>
		);
	});
	return (
		<div>
			<select
				onChange={e => setCurrentRegion(e.target.value)}
				value={currentRegion}
				className='p-4 m-4 shadow-sm w-1/2'
			>
				{regionOptions}
			</select>
		</div>
	);
}

export default RegionFilter;
