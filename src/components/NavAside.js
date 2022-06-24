import './NavAside.scss';
import { useState } from 'react';
import { List, House, GameController, Plus, X } from 'phosphor-react';
import { NavLink } from 'react-router-dom';

const NavAside = ({triggerMenu, closeMenu,openMenu, sideOpen}) => {
	const activeClassName = 'nav__aside__icon--active';


	return (
		<aside className='nav__aside'>
			<nav className='nav__aside__flex'>
				{!sideOpen && <List size={32} onClick={openMenu} />}
				{sideOpen && <X size={32} onClick={closeMenu} className='nav__aside__flex__x'/>}
				<ul className='nav__aside__menu'>
					<NavLink
						to={'/'}
						className={({ isActive }) =>
							isActive ? activeClassName : 'none'
						}
					>
						<li className='nav__aside__icon' onClick={triggerMenu}>
							<House size={26} />
							{sideOpen && <span>Home</span>}
						</li>
					</NavLink>
					<NavLink
						to={'/allgames'}
						className={({ isActive }) =>
							isActive ? activeClassName : 'none'
						}
					>
						<li className='nav__aside__icon' onClick={triggerMenu}>
							<GameController size={26} />
							{sideOpen && <span>All Games</span>}
						</li>
					</NavLink>
					<NavLink
						to={'recently'}
						className={({ isActive }) =>
							isActive ? activeClassName : 'none'
						}
					>
						<li className='nav__aside__icon' onClick={triggerMenu}>
							<Plus size={26} weight='bold' />
							{sideOpen && <span>Recently Added</span>}
						</li>
					</NavLink>
				</ul>
				<div></div>
			</nav>
		</aside>
	);
};

export default NavAside;
