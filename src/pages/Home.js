import axios from "axios";
import {useState, useEffect} from 'react';

const Home = () => {
    
    const apiKey = process.env.REACT_APP_API_KEY;
    const axiosOptions = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        headers: {
            'X-RapidAPI-Key' : apiKey,
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    }

    const [data, setData] = useState([]);

    useEffect (()=> {
        axios.request(axiosOptions).then(response => {
            setData(response.data);
        })
    }, [])

    return (
        <h1>Testo</h1>
    )
}

export default Home;