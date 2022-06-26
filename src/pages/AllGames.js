import AllGamesHero from '../components/allgames/AllGamesHero';
import AllGamesFilter from '../components/allgames/AllGamesFilter';
import AllGamesList from '../components/allgames/AllGamesList';

const AllGames = () => {
	return (
		<>
			<AllGamesHero />
			<main className='page__main'>
				<AllGamesFilter />
				<AllGamesList />
			</main>
		</>
	);
};

export default AllGames;