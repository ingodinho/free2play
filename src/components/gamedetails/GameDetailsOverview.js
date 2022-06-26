import './GameDetailsOverview.scss';

const GameDetailsOverview = () => {
	const description =
		'If you’ve been looking for a game to scratch that open-world ARPG itch, one with perhaps a bit of Asian flair, then you’re going to want to check out miHoYo’s Genshin Impact. The developer, known previously for Honkai Impact 3rd, take players to the world of Teyvat, a vast open-world designed for extended exploration. Players not only explore dungeons, but climb mountains, trees, and buildings to discover all kinds of secrets. \r\n\r\nOf course, the main character doesn’t travel alone. Instead, players build a four-player group out of over 20 characters that can be swapped out to create the best group for any particular mission. The characters, each with different skills filling out the classic RPG types as well as distinct elemental focuses, can be obtained via gameplay or the game’s gacha mechanics – as is gear. Both characters and gear are upgraded in the game via the in depth crafting system.\r\n\r\nIn addition, the game offers players an adventurer system that provides them with even more to do, be it daily quests, small favors for the locals, or big continent-traveling quests. The adventurer system also rewards players for their activities with a wide variety of items.\r\n\r\nGenshin Impact is available to players on PC, PlayStation 4, and mobile devices. It also features a multiplayer mode allowing up to four players to play together and cross-play across all four platforms, however, PlayStation 4 does not allow for cross-progression.';

	return (
		<section className='details__overview'>
			<h2>Genshin Impact</h2>
			<div className='details__overview__grid'>
				<div className='details__overview__info'>
					<img
						src='https://www.freetogame.com/g/475/thumbnail.jpg'
						alt='thumbnail'
					/>
					<h4>Platform: Windows(Client)</h4>
					<div className='label__cards__container'>
						<span className='label__card'>MMORPG</span>
					</div>
					<button className='btn__prm'>PLAY NOW</button>
				</div>
				<article className='details__overview__about'>
					<h3>About</h3>
					{description.split('\r\n\r\n').map((el, i) => (
						<p key={i}>{el}</p>
					))}
				</article>
			</div>
		</section>
	);
};

export default GameDetailsOverview;
