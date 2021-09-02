import styled from 'styled-components';

const Container = styled.div`
	display: grid;
	justify-items: stretch;
	align-items: stretch;
	grid-template-rows: 17em 17em;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-areas:
		'side results practice'
		'side filter filter';
	gap: 5em;
	margin-bottom: 100px;
`;

const Title = styled.span`
	display: block;
	font-size: 1.2em;
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

export { Container, Title, Section };
