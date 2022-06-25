import './HomeRecently.scss';
import HomeRecentlyItem from './HomeRecentlyItem';
import data1 from '../dummydata/data1';

const HomeRecently = () => {
	return (
		<section className='home-recently'>
			<h3>Recently Added</h3>
			<div className='home-recently__grid'>
					<HomeRecentlyItem />
					<HomeRecentlyItem />
					<HomeRecentlyItem />
					<HomeRecentlyItem />
			</div>
			<div className='btn__right'>
				<button className='btn__prm'>SHOW MORE</button>
			</div>
		</section>
	);
};

export default HomeRecently;
