import './TopPCItem.scss';
import {Link} from 'react-router-dom';

const TopPCItem = () => {
	let url = 'https://www.freetogame.com/g/467/thumbnail.jpg';
	return (
		<div className='home__top-pc__item'>
			<img src={url} alt='thumbnail' />
			<span className='home__top-pc__label__pos label__pos'>2</span>
			<div className='home__top-pc__item__body'>
				<article>
						<h4>Genshin Impact</h4>
						<Link to={'/gamedetails'}><button className='btn__prm'>READ MORE</button></Link>
				</article>
				<div className='label__cards__container'>
					<span className='label__card'>MS</span>
					<span className='label__card'>MMORPG</span>
				</div>
			</div>
		</div>
	);
};

export default TopPCItem;
