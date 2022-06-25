import './HomeRecently.scss';
import HomeRecentlyItem from './HomeRecentlyItem';
import data from '../components/testdata';

const HomeRecently = () => {
	return (
		<section className='home-recently'>
			<h3>Recently Added</h3>
			<div className="home-recently__grid">
					<HomeRecentlyItem />
					<HomeRecentlyItem />
					<HomeRecentlyItem />
					<HomeRecentlyItem />
			</div>
			<div className="home-recently__more">
				<button className='home-recently__more__btn btn__prm'>SHOW MORE</button>
			</div>
		</section>
	);
};

export default HomeRecently;
