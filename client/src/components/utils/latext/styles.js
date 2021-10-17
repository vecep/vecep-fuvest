import styled from 'styled-components';
import TeX from '@matejmazur/react-katex';

const StyledTeX = styled(TeX)`
  ${({ label, answerColor }) =>
		label ? `
      font-size: 1rem;
      margin-left: 10px;
      color: ${answerColor};
    ` : `
      font-size: 0.5em;
    `
}
`;

export { StyledTeX };
