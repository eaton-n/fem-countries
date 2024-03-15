import { Link } from 'react-router-dom';
import MoonIcon from './MoonIcon';

function Header() {
	return (
		<header className='mb-4 py-6 px-4 flex flex-row justify-between shadow-sm bg-white  '>
			<Link to='/'>
				<h1 className='font-bold'>Where in the world?</h1>
			</Link>

			<button className='text-sm flex flex-row items-center '>
				<MoonIcon />
				<p className='pl-2'>Dark Mode</p>
			</button>
		</header>
	);
}

export default Header;
