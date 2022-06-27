import './App.scss';
import Nav from './components/navigation/Nav';
import Home from './pages/Home';
import AllGames from './pages/AllGames';
import RecentlyAdded from './pages/RecentlyAdded';
import GameDetails from './pages/GameDetails';
import {Routes, Route, useLocation} from 'react-router-dom';
import {useEffect} from 'react';

function App() {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathname])

  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/allgames' element={<AllGames/>}/>
        <Route path='/recently' element={<RecentlyAdded/>}/>
        <Route path='/gamedetails/' element={<GameDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
