import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: static;
  box-sizing: border-box;

  & > div {
    box-sizing: border-box;
    padding-left: 100px;
    padding-right: 100px;
  }

  a {
    text-decoration: none;
    color: white;
    transition: 0.8s;
  }
`;

export { HomeContainer };
