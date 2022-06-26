import {Link} from 'react-router-dom';

const Card = () => {

  let url = 'https://www.freetogame.com/g/427/thumbnail.jpg';
  
  
  return <div className="card">
    <img src={url} alt="" />
    <div className="card__body">
      <article>
        <h4>Drakensang Online</h4>
        <Link to={'/gamedetails'}><button className="btn__prm">READ MORE</button></Link>
      </article>
      <div className="label__cards__container">
        <span className="label__card">BR</span>
        <span className="label__card">MMORPG</span>
      </div>
    </div>
  </div>
}

export default Card;