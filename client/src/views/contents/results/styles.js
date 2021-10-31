import styled from 'styled-components';
import { withStyles } from '@material-ui/styles';
import Divider from '@material-ui/core/Divider';

export const Container = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
	padding: 0 7%;
`;

export const Subjects = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	row-gap: 2em;
	width: 100%;
	padding: 30px 0;

	& > * {
		flex: 1 1 50%;
	}
`;

export const Summary = styled.div`
	display: flex;
	flex: 0.6;
	flex-direction: column;
	align-items: center;
	padding: 30px 0;
	box-sizing: border-box;
	gap: 10px;
	height: 70vh;
	width: auto;
	border-radius: 10px;
	background-color: #282727;
	color: #ECECEC;
`;

export const Details = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	row-gap: 2em;
	width: 60%;
	padding: 30px 0;

	& > * {
		flex: 1 1 50%;
	}
`;

export const Span = styled.span`
	font-size: 1.7rem;
	color: ${({ color }) => color};
`;

export const StyledDivider = withStyles({
	root: {
		width: '50%',
		background: '#B2B2B2'
	}
})(Divider);
