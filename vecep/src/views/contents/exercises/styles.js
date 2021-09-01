import styled from 'styled-components';

const ExercisesContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 50px;
	width: 65vw;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	width: 100%;
	margin: 45px 0 20px 0;
`;

const FilterContainer = styled.div`
	display: flex;
	justify-content: flex-end;

	.topic-filter {
		width: 250px;
		margin-right: 25px;
	}

	.year-filter {
		width: 125px;
	}
`;

const SubjectTitle = styled.span`
	font-size: 2em;
	font-weight: 500;
`;

export { ExercisesContainer, Header, FilterContainer, SubjectTitle };
