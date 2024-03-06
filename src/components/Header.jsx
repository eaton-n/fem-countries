import { Link } from 'react-router-dom';

function Header() {
	return (
		<header className='flex flex-row'>
			<Link to='/'>
				<h1 className='text-yellow-600'>Where in the world?</h1>
			</Link>
			<button>Dark Mode</button>
		</header>
	);
}

export default Header;
