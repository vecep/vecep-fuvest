import styled from 'styled-components';

const ExercisesContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 50px;
width: 65vw;

.filter-container {
  display: flex;
	justify-content: space-between;
	align-items: flex-end;
  width: 100%;
  margin-top: 45px;

	& > span {
		font-size: 2em;
		font-weight: 500;
	}

	.filters {
		display: flex;

		.topic-filter {
			width: 250px;
			margin-right: 25px;
		}

		.year-filter {
			width: 125px;
		}
	}
}
`;

export { ExercisesContainer };
