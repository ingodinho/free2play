import HomeRecentlyCard from './HomeRecentlyCard';

const HomeRecently = () => {
	return (
		<section className='card-area'>
			<h3>Recently Added</h3>
			<div className='card-area__grid'>
					<HomeRecentlyCard />
					<HomeRecentlyCard />
					<HomeRecentlyCard />
					<HomeRecentlyCard />
			</div>
			<div className='btn__right'>
				<button className='btn__prm'>SHOW MORE</button>
			</div>
		</section>
	);
};

export default HomeRecently;
