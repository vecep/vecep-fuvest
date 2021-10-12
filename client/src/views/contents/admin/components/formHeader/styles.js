import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const InfoIcon = withStyles({
	root: {
		fontSize: '18px',
		marginLeft: '5px'
	}
})(InfoOutlinedIcon);

export { Container, InfoIcon };
