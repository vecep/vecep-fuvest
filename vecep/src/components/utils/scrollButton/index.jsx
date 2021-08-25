import React, { useState } from 'react';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Button from './style';

const ScrollButton = () => {
	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300){
			setVisible(true);
		}
		else if (scrolled <= 300){
			setVisible(false);
		}
	};

	const scrollToTop = () =>{
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	window.addEventListener('scroll', toggleVisible);

	return (
		<Button style={{ display: visible ? 'inline' : 'none' }} onClick={scrollToTop}>
			<KeyboardArrowUpIcon />
		</Button>
	);
};

export default ScrollButton;
