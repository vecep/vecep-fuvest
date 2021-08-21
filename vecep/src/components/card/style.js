import styled from 'styled-components';

const CardContainer = styled.div`
display: flex;
flex-direction: column;
font-size: 2em;
color: black;
margin-top: 60px;

.card-info {
  display: flex;
  justify-content: space-between;

  span {
    margin: 0 20px 5px 15px;
    font-size: 1.2rem;

    &:last-child {
      font-weight: bold;  
      font-size: 1.5rem;
    }
  }
}

.correct {
  color: green;
}

.wrong {
  color: red;
}

.card-header {
  background: #ECECEC;
  border-top: 40px solid transparent;
  width: 65vw;
  height: 50vh;
  text-align: left;
  padding: 0 10px 10px 40px;
  border-radius: 20px 20px 0 0;
  display: flex;
}

.card-footer {
  display: flex;
  justify-content: center;
  background: #48A7FF;
  color: white;
  height: 40px;
  border-radius: 0 0 20px 20px;
  transition: 0.5s;
}


.card-footer:hover {
  background: #369bf7
}

.answer {
  border: none;
  background-color: transparent;
  font-size: 1rem;
  cursor: pointer;
  display: inline-block;
  color: white;
  font-weight: bold;
  width: 100%;
}

.card-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: auto;
  width: 100%;
}

.question-text {
  overflow-wrap: break-word;
  width: 60%;
  height: 100%;
}

.question-instruction {
  font-size: 0.5em;
  font-weight: bold;
  margin-bottom: 50px;
}

.options-container {
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  span {
    font-size: 1rem;
    margin-left: 10px;
  }
}

.options-container svg {
  width: 1rem;
}

.question-ref { 
  margin: 0 30px 0 15px;
  width: 40%;
}

.reference {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 15px;
}

.source {
  margin-top: 10px;
  font-size: 0.5em;
  font-weight: bold;
}

.source {
  font-size: 0.5em;
}

.reference > span {
  font-size: 0.5em;
}

.reference > img {
  min-width: 100px;
  min-height: 100px;
  width: 100%;
  height: 50%;
}

.reference > hr {
  width: 100%;
}
  
/* width */
.card-content::-webkit-scrollbar {
  width: 7px;
}

/* handle */
.card-content::-webkit-scrollbar-thumb {
  background: #B5B5B5; 
  border-radius: 10px;
}

/* background */
.card-content::-webkit-scrollbar-track {
  background: grey;
  border-radius: 20px;
}

.card-content::-webkit-scrollbar-thumb:hover {
  background: grey; 
}
`;

export default CardContainer;
