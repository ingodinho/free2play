import './TopBrowser.scss';
import Card from './Card';

const TopBrowser = () => {
	return (
		<section className='card-area'>
			<h3>Top 4 Games for Browser in June 2021</h3>
			<div className='card-area__grid'>
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
      <div className="btn__right">
        <button className="btn__prm">SHOW MORE</button>
      </div>
		</section>
	);
};

export default TopBrowser;