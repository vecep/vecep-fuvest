import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: calc(100vh - 70px);
`;

const Title = styled.h1`
	font-size: 15vh;
`;

const Message = styled.span`
	font-size: 5vh;
`;

export { Container, Title, Message };
