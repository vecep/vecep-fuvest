import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
	width: 65vw;
  margin-bottom: 30px;
`;

const Header = styled.h1`
  font-size: 2em;
	font-weight: 500;
  margin: 0;
`;

const Info = styled.h2`
  font-size: 1.3em;
	font-weight: 500;
  margin-top: 10px;
`;

const TimerContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding-top: 60px;
`;

export { Container, Header, Info, TimerContainer };
