import './GameDetails.scss';
import GameDetailsHero from '../components/gamedetails/GameDetailsHero';
import GameDetailsOverview from '../components/gamedetails/GameDetailsOverview';
import GameDetailsSpecs from '../components/gamedetails/GameDetailsSpecs';

const GameDetails = () => {
	return <>
		<GameDetailsHero />
		<main className="page__main">
			<GameDetailsOverview />
			<GameDetailsSpecs />
		</main>
	</>;
};

export default GameDetails;
