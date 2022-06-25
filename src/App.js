import './App.scss';
import Nav from './components/navigation/Nav';
import Home from './pages/Home';
import AllGames from './pages/AllGames';
import RecentlyAdded from './pages/RecentlyAdded';
import GameDetails from './pages/GameDetails';
import {Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/allgames' element={<AllGames/>}/>
        <Route path='/recently' element={<RecentlyAdded/>}/>
        <Route path='/gamedetails/:id' element={<GameDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
