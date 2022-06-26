import './AllGamesFilter.scss';
import { useState, useRef } from 'react';
import { CaretDown } from 'phosphor-react';

import DropDownItem from './DropdownItem';

const AllGamesFilter = () => {
	const [platformOpen, setPlattformOpen] = useState(false);
	const [genreOpen, setGenreOpen] = useState(false);
	const [sortOpen, setSortOpen] = useState(false);

	// Zur leichteren Selection der Dropdownbutton
	const refPlat = useRef(null);
	const refGenre = useRef(null);
	const refSort = useRef(null);

	// Handled das oeffnen und schliessen der Menus
	const toggleDropDown = (e) => {
		let target = e.target.closest('.btn__prm');
		setPlattformOpen(false);
		setGenreOpen(false);
		setSortOpen(false);
		switch (target) {
			case refPlat.current:
				platformOpen && setPlattformOpen(false);
				!platformOpen && setPlattformOpen(true);
				break;
			case refGenre.current:
				genreOpen && setGenreOpen(false);
				!genreOpen && setGenreOpen(true);
				break;
			case refSort.current:
				sortOpen && setSortOpen(false);
				!sortOpen && setSortOpen(true);
				break;
			default: 
		}
	};

	// PfeilAnimation
	const caretTransform = (state) => {
		if (state) {
			return {
				transform: 'rotate(180deg)',
			};
		}
		return {
			transform: 'rotate(0deg)',
		};
	};
	return (
		<section className='all-games__filter'>
			<div className='all-games__filter__grid'>
				<div className='all-games__filter__container'>
					<button
						className='btn__prm'
						ref={refPlat}
						onClick={toggleDropDown}
						value={platformOpen}
					>
						<span>PLATTFORM</span>
						<CaretDown
							size={32}
							weight='bold'
							className='all-games__filter__arrow'
							style={caretTransform(platformOpen)}
						/>
					</button>

					{platformOpen && (
						<ul className='all-games__filter__dropdown'>
							<DropDownItem content={'Item1'} />
							<DropDownItem content={'Item2'} />
							<DropDownItem content={'Item3'} />
							<DropDownItem content={'Item4'} />
						</ul>
					)}
				</div>
				<div className='all-games__filter__container'>
					<button className='btn__prm' ref={refGenre} onClick={toggleDropDown}>
						<span>GENRE/TAG</span>
						<CaretDown
							size={32}
							weight='bold'
							className='all-games__filter__arrow'
							style={caretTransform(genreOpen)}
						/>
					</button>
					{genreOpen && (
						<ul className='all-games__filter__dropdown all-games__filter__dropdown-scroll'>
							<DropDownItem content={'Item5'} />
							<DropDownItem content={'Item6'} />
							<DropDownItem content={'Item7'} />
							<DropDownItem content={'Item8'} />
							<DropDownItem content={'Item9'} />
							<DropDownItem content={'Item10'} />
							<DropDownItem content={'Item11'} />
							<DropDownItem content={'Item12'} />
						</ul>
					)}
				</div>
				<div className='all-games__filter__container'>
					<button className='btn__prm' ref={refSort} onClick={toggleDropDown}>
						<span>SORT BY</span>
						<CaretDown
							size={32}
							weight='bold'
							className='all-games__filter__arrow'
							style={caretTransform(sortOpen)}
						/>
					</button>
					{sortOpen && (
						<ul className='all-games__filter__dropdown'>
							<DropDownItem content={'Item13'} />
							<DropDownItem content={'Item14'} />
							<DropDownItem content={'Item15'} />
							<DropDownItem content={'Item16'} />
						</ul>
					)}
				</div>
			</div>
			<div className='all-games__filter__labels'></div>
		</section>
	);
};

export default AllGamesFilter;
