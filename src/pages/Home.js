import HomeHero from '../components/home/HomeHero';
import HomeRecently from '../components/home/HomeRecently';
import TopPC from '../components/home/TopPC';
import TopBrowser from '../components/home/TopBrowser';

// import axios from 'axios';
// import { useState, useEffect } from 'react';

const Home = () => {
	// const apiKey = process.env.REACT_APP_API_KEY;
	// const axiosOptions = {
	// 	method: 'GET',
	// 	url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
	// 	params: {id:'475'},
	// 	headers: {
	// 		'X-RapidAPI-Key': apiKey,
	// 		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
	// 	},
	// };

	// const [data, setData] = useState([]);

	// useEffect(() => {
	// 	axios.request(axiosOptions).then((response) => {
	// 		setData(response.data);
	// 		console.log(response.data);
	// 	});
	// }, []);

	return (
		<>
			<HomeHero />
			<main className="page__main">
				<HomeRecently />
				<TopPC />
				<TopBrowser />
			</main>
		</>
	)
};

export default Home;