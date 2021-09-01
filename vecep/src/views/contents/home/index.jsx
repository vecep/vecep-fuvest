import React from 'react';
import ScrollButton from '../../../components/utils/scrollButton';
import HomeIntro from './components/homeIntro';
import HomeStatistics from './components/homeStatistics';
import HomeFeature from './components/homeFeature';
import HomeFooter from './components/homeFooter';
import { HomeContainer } from './styles';

const Home = () => (
	<HomeContainer>
		<HomeIntro />
		<HomeStatistics />
		<HomeFeature />
		<HomeFooter />
		<ScrollButton />
	</HomeContainer>
);

export default Home;
