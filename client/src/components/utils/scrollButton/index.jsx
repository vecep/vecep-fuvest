import React, { useState, useEffect } from 'react';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Button from './style';

const ScrollButton = () => {
	const [scrollPosition, setScrollPosition] = useState(0);

	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll, true);
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	return (
		<Button style={{ display: scrollPosition > 300 ? 'inline' : 'none' }} onClick={scrollToTop}>
			<KeyboardArrowUpIcon />
		</Button>
	);
};

export default ScrollButton;
