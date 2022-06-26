import './TopPCHero.scss';
import {Link} from 'react-router-dom';

const TopPCHero = () => {
	const styles = {
		background: `url('https://www.freetogame.com/g/475/genshin-impact-1.jpg') center / cover no-repeat`,
	};

	return (
		<div className='home__top-pc__hero' style={styles}>
			<span className='home__top-pc__hero__pos label__pos'>1</span>
      <article className='home__top-pc__hero__article'>
        <h3>Genshin Impact</h3>
        <Link to={'gamedetails'}><button className='btn__prm'>READ MORE</button></Link>
        <div className='label__cards__container'>
            <span className='label__card'>MS</span>
            <span className='label__card'>MMORPG</span>
        </div>
      </article>
		</div>
	);
};

export default TopPCHero;
