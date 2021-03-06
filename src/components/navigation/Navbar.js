import './Navbar.scss';
import { MagnifyingGlass, Sword } from 'phosphor-react';

const Navbar = ({ sideOpen }) => {
	return (
		<div className='navbar__space'>
			<nav className='navbar'>
				<div
					className='navbar__logos'
					style={{
						transform: `${sideOpen ? 'translateX(15ch)' : 'translateX(0)'}`,
					}}
				>
					<Sword size={32} className='navbar__logos__logo' />
					<h1 className='navbar__logos_title'>FREE2PLAY</h1>
				</div>
				<div className='navbar__search__box'>
					<input type='text' className='navbar__search__input' />
					<MagnifyingGlass size={26} className='navbar__search__icon' />
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
