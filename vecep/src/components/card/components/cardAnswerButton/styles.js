import styled from 'styled-components';

const AnswerButton = styled.button`
	border: none;
	background-color: transparent;
	font-size: 1rem;
	cursor: pointer;
	display: inline-block;
	color: white;
	font-weight: bold;
	width: 100%;

	&:disabled {
		cursor: not-allowed;
	}

	&:disabled {
		background: #1b4469;
		border-radius: 0 0 20px 20px;
		transition: 0.5s;

		&:hover {
			background: grey;
		}
	}
`;

export default AnswerButton;
