import './DropdownItem.scss';
import {X} from 'phosphor-react';

const DropDownItem = ({ content }) => {
	return (
		<li className='dropdown__item__container'>
			<label htmlFor={content} className='dropdown__item'>
				<input type='checkbox' name={content} id={content} />
				<span>{content}</span>
				<X className='dropdown__item__check' weight='bold'/>
			</label>
		</li>
	);
};

export default DropDownItem;
