import styled from 'styled-components';
import { withStyles } from '@material-ui/styles';
import Divider from '@material-ui/core/Divider';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;

	& > svg {
		fill: #48A7FF;
	}
`;

export const ValueContainer = styled.div`
	display: flex;
	align-items: flex-end;
`;

export const Value = styled.span`
	font-size: 2.5em;
	font-weight: bold;
`;

export const Total = styled.span`
	font-size: 1.2em;
	font-weight: bold;
	color: grey;
	white-space: pre;
`;

export const Label = styled.span`
	font-size: 1.3em;
	color: #282727;
	text-align: center;
`;

export const StyledDivider = withStyles({
	root: {
		width: '50%'
	}
})(Divider);
