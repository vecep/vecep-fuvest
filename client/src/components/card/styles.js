import styled from 'styled-components';
import Skeleton from '@material-ui/lab/Skeleton';
import { withStyles } from '@material-ui/core/styles';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 2em;
	color: black;
	margin-top: 40px;
`;

const InfoContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Info = styled.span`
	margin: 0 20px 5px 15px;
	font-size: ${(props) => (props.bold ? '1.5rem' : '1.2rem')};
	font-weight: ${(props) => props.bold && 'bold'};
`;

const Content = styled.div`
	display: flex;
	justify-content: space-between;
	background: #f0f0f0;
	border-top: 40px solid transparent;
	width: 65vw;
	height: 50vh;
	padding: 0 10px 10px 40px;
	border-radius: 20px 20px 0 0;
	box-sizing: border-box;
	height: fit-content;
	text-align: justify;
`;

const Footer = styled.div`
	display: flex;
	justify-content: center;
	background: #48a7ff;
	color: white;
	height: 40px;
	border-radius: 0 0 20px 20px;
	transition: 0.5s;

	&:hover {
		background: #369bf7;
	}
`;

const CardSkeleton = withStyles({
	root: {
		width: '65vw',
		height: '50vh',
		borderRadius: '20px',
		marginTop: '40px'
	}
})(Skeleton);

export { Container, InfoContainer, Info, Content, Footer, CardSkeleton };
