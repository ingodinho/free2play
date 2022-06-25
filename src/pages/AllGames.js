import './AllGames.scss';
import AllGamesHero from '../components/allgames/AllGamesHero';
import AllGamesList from '../components/allgames/AllGamesList';


const AllGames = () => {
	return <>
		<AllGamesHero></AllGamesHero>
		<main className='page__main'>
			<AllGamesList />
		</main>
	</>;
};

export default AllGames;
