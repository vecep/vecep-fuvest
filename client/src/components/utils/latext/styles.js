import styled from 'styled-components';

const StyledLatex = styled.div`
  line-height: 1rem;
  ${({ label, answerColor }) =>
		label ? `
      margin-bottom: 0;
      font-size: 1rem;
      margin-left: 10px;
      color: ${answerColor};
    ` : `
      font-size: 0.5em;
      margin-bottom: 20px;
    `
}
`;

export { StyledLatex };
