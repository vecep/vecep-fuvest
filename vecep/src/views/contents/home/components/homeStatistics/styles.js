import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 275px;
  margin: 50px 0 130px 0;
  padding: 70px 100px 50px 100px;
  background-color: #282727;
  color: white;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 600px;
    padding: 70px 100px 50px 100px;
  }
`;

const Span = styled.span`
  text-align: center;
  font-size: 3em;
  white-space: pre-line;
`;

export { Container, Span };
