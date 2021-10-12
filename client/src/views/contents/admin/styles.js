import styled from 'styled-components';

const Container = styled.div`
	width: 70%;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 50% auto;
  gap: ${props => props.large ? '3em' : '1em'};
`;

const FormColumn = styled.div`
  display: grid;
  gap: 1em;
`;

export { Container, FormRow, FormColumn };
