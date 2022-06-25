// import './HomeRecentlyItem.scss';

const HomeRecentlyCard = () => {
	let url = 'https://www.freetogame.com/g/467/thumbnail.jpg';

	return (
		<div className='card'>
			<img src={url} alt='thumbnail' />
			<div className='card__body'>
				<article>
					<h4>Phantasy Star Online 2</h4>
					<p>
						Welcome to ARKS, and elite task force searching
						dangerous planets for the corrupted Falspawn in Phantasy
						Star 2 Online, Sega’s popular, free-to-play sci-fi
						MMORPG.
					</p>
					<button className='btn__prm'>READ MORE</button>
				</article>
				<div className='label__cards__container'>
					<span className='label__card'>MS</span>
					<span className='label__card'>MMORPG</span>
				</div>
			</div>
		</div>
	);
};

export default HomeRecentlyCard;
