import './GameDetailsSpecs.scss';

const GameDetailsSpecs = () => {
	return (
		<section className='details__specs'>
			<div className='details__specs__info'>
				<h5>Additional Information</h5>
				<p>
					Please note this free-to-play game may or may not offer optional
					in-game purchases.
				</p>
				<div className='details__specs__info__table'>
						<h6>Developer</h6>
						<span>miHoYo</span>
						<h6>Publisher</h6>
						<span>miHoYo</span>
						<h6>Release Date</h6>
						<span>September 28, 2020</span>
				</div>
			</div>
      <div className="details__specs__require">
          <h5>Minimum System Requirements (Windows)</h5>
          <div className="details__specs__require__grid">
            <div className="details__specs__require__grid__item">
              <h6>OS</h6>
              <span>Windows 7 SP1 64-bit</span>
            </div>
            <div className="details__specs__require__grid__item">
              <h6>Processor</h6>
              <span>Intel Core i7 or equivalent</span>
            </div>
            <div className="details__specs__require__grid__item">
              <h6>Memory</h6>
              <span>16 GB</span>
            </div>
            <div className="details__specs__require__grid__item">
              <h6>Graphics</h6>
              <span>NVIDIA GeForce GTX 1060 6GB or better</span>
            </div>
            <div className="details__specs__require__grid__item">
              <h6>Storage</h6>
              <span>30 GB</span>
            </div>
            <div className="details__specs__require__grid__item">
              <h6>Additional Notes</h6>
              <span>Specifications may change during development</span>
            </div>
          </div>
      </div>
		</section>
	);
};

export default GameDetailsSpecs;
