import RecentlyAddedHero from '../components/recentlyadded/RecentlyAddedHero';
import RecentlyAddedList from '../components/recentlyadded/RecentlyAddedList';

const RecentlyAdded = () => {
	return (
		<>
			<RecentlyAddedHero />
			<main className='page__main'>
				<RecentlyAddedList />
			</main>
		</>
	);
};
export default RecentlyAdded;
