import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	background-color: #282727;
	width: 100%;
	padding: 65px 0 65px 0;
	margin-top: 50px;
	color: white;

	@media only screen and (max-width: 820px) {
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
	}
`;

const Title = styled.span`
	font-size: 1.5em;
`;

const Span = styled.span`
	font-weight: ${(props) => props.bold && 'bold'};
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;

	span:nth-child(2) {
		margin-top: 1.5rem;
	}

	a:hover {
		color: #48a7ff;
	}

	&:nth-child(2) {
		margin-left: 60px;
	}
`;

const Info = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	display: flex;
	align-items: center;

	@media only screen and (max-width: 820px) {
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
	}
`;

const SocialMedia = styled.div`
	display: flex;
	justify-content: center;

	@media only screen and (max-width: 820px) {
		flex-direction: row;
		justify-content: center;
		width: 100%;
		margin-top: 50px;
	}
`;

const IconsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 1.5rem;
	width: 100%;

	svg {
		font-size: 2rem;
		transition: fill 1.3s;

		&:hover {
			fill: #48a7ff;
		}
	}
`;

export { Container, Title, Span, Content, Info, SocialMedia, IconsContainer };
