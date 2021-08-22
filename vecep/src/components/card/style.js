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

.card-body {
  background: #ECECEC;
  border-top: 40px solid transparent;
  width: 65vw;
  height: 50vh;
  padding: 0 10px 10px 40px;
  border-radius: 20px 20px 0 0;
  display: flex;
  
  .card-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow: auto;
    width: 100%;

    &::-webkit-scrollbar {
      width: 7px;
    }

    &::-webkit-scrollbar-thumb {
      background: #B5B5B5; 
      border-radius: 10px;

      &:hover {
        background: #C5C5C5; 
      }
    }

    &::-webkit-scrollbar-track {
      background: grey;
      border-radius: 20px;
    }

    .question-container {
      overflow-wrap: break-word;
      width: 60%;
      height: 100%;

      p {
        font-size: 0.5em;
        font-weight: bold;
        margin-bottom: 50px;
      }
      
      .options-container {
        display: flex;
        align-items: center;
        margin-left: 10px;
        margin-bottom: 15px;

        span:nth-child(2) {
          font-size: 1rem;
          margin-left: 10px;
        }

        svg {
          width: 1.1rem;
          height: 1.1rem;
        }

        .correct {
        color: green;
        }

        .wrong {
          color: red;
        }
      }
    }

    .reference-container { 
      margin: 0 30px 0 15px;
      width: 40%;
    
      .reference {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-bottom: 15px;

        span {
          font-size: 0.5em;
        }

        p {
          font-size: 0.5em;
          text-align: justify;
        }

        img {
          min-width: 100px;
          min-height: 100px;
          width: 100%;
          height: 50%;
        }

        hr {
          width: 100%;
        }

        .source {
          margin-top: 10px;
          font-size: 0.5em;
          font-weight: bold;
        }
      }
    }
  }
}

.card-footer {
  display: flex;
  justify-content: center;
  background: #48A7FF;
  color: white;
  height: 40px;
  border-radius: 0 0 20px 20px;
  transition: 0.5s;

  &:hover {
    background: #369bf7
  }

  .answer-button {
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
      background: #1B4469;
      border-radius: 0 0 20px 20px;
      transition: 0.5s;

      &:hover {
        background: grey;
      }
    }
  }
}
`;

export default CardContainer;
