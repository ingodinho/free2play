import NavAside from './NavAside';
import Navbar from './Navbar';

import {useState} from 'react';

const Nav = () => {

    const [sideOpen, setSideOpen] = useState(false);
    const triggerMenu = () => {
        sideOpen && setSideOpen(false);
    }

    const closeMenu = () => {
        setSideOpen(false)
    }

    const openMenu = () => {
        setSideOpen(true)
    }

	return (
		<>
			<Navbar sideOpen={sideOpen}/>
			<NavAside triggerMenu={triggerMenu} closeMenu={closeMenu} openMenu={openMenu} sideOpen={sideOpen}/>
		</>
	);
};

export default Nav;
