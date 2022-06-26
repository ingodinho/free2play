import './GameDetails.scss';
import GameDetailsHero from '../components/gamedetails/GameDetailsHero';
import GameDetailsOverview from '../components/gamedetails/GameDetailsOverview';

const GameDetails = () => {
	return <>
		<GameDetailsHero />
		<main className="page__main">
			<GameDetailsOverview />
		</main>
	</>;
};

export default GameDetails;
