import styled from 'styled-components';
import { withStyles } from '@material-ui/styles';
import Divider from '@material-ui/core/Divider';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 7px;
`;

export const Title = styled.span`
	font-size: 1.2rem;
`;

export const StyledDivider = withStyles({
	root: {
		width: '50%',
		background: '#B2B2B2'
	}
})(Divider);

export const Span = styled.span`
	color: ${({ color }) => color}
`;
