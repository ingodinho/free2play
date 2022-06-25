import './TopPC.scss';
import TopPCHero from './TopPCHero';
import TopPCItem from './TopPCItem';

const TopPC = () => {
	return (
		<section className='home__top-pc'>
			<h3>Top 4 Games for PC in June 2021</h3>
			<div className='home__top-pc__grid'>
				<TopPCHero />
				<div className="home__top-pc__grid-right">
					<TopPCItem />
					<TopPCItem />
					<TopPCItem />
				</div>
			</div>
			<div className='btn__right'>
				<button className='btn__prm'>SHOW MORE</button>
			</div>
		</section>
	);
};

export default TopPC;
