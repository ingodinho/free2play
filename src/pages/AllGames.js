import './AllGames.scss';
import AllGamesHero from '../components/allgames/AllGamesHero';
import AllGamesFilter from '../components/allgames/AllGamesFilter';
import AllGamesList from '../components/allgames/AllGamesList';

const AllGames = () => {
	return (
		<>
			<AllGamesHero />
			<AllGamesFilter />
			<main className='page__main'>
				<AllGamesList />
			</main>
		</>
	);
};

export default AllGames;
