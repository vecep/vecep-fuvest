import styled from 'styled-components';

const Container = styled.div`
	display: grid;
	width: 80%;
	grid-template-rows: repeat(2, auto);
	grid-template-columns: repeat(3, auto);
	grid-template-areas:
		'side results filter'
		'side practice practice';
	gap: 4em;
	margin-bottom: 100px;
`;

const Title = styled.span`
	display: block;
	font-size: 1.5em;
	margin-block-end: 0.83em;
	font-weight: bold;
`;

const Section = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	grid-row: ${(props) => `${props.placement}-start / ${props.placement}-end`};
	grid-column: ${(props) => `${props.placement}-start / ${props.placement}-end`};

	.skeleton {
		width: 100%;
		height: 100%;
	}
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	border: 5px solid #282727;
	border-radius: 5px;
	transition: 1s;

	&:hover {
		transform: scale(101%);
	}
`;

export { Container, Title, Section, Image };
