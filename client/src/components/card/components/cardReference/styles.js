import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	height: 50vh;
	width: 50%;
`;

const Reference = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	margin-bottom: 15px;
	margin-right: 15px;

	img {
		min-width: 100px;
		min-height: 100px;
		width: 100%;
	}
`;

const Label = styled.span`
	font-size: 0.5em;

	&.source {
		margin-top: 10px;
		font-weight: bold;
	}

	&.separator {
		width: 100%;
		text-align: center;
	}
`;

export { Container, Reference, Label };
