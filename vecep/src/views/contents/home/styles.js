import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: static;
  box-sizing: border-box;

  a {
    text-decoration: none;
    color: white;
    font-size: 1rem;
    transition: 0.8s;

    &:hover {
      color: #282727;
    }
  }

  & > div {
    box-sizing: border-box;
    padding-left: 100px;
    padding-right: 100px;
  }

  .feature-grid {
    display: grid;
    justify-items: stretch;
    align-items: stretch;
    grid-template-rows: 17em 17em;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      'side results practice'
      'side filter filter';
    gap: 5em;
    margin-bottom: 100px;

    .title {
      display: block;
      font-size: 1.2em;
      margin-block-end: 0.83em;
      font-weight: bold;
    }
  }

  .home-footer {
    display: flex;
    flex-direction: row;
    background-color: #282727;
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    margin-top: 50px;
    color: white;

    @media only screen and (max-width: 820px) {
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }

    .footer-topic {
      font-size: 1.5em;
    }

    .footer-info {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      display: flex;
      align-items: center;
      width: 50%;

      .footer-content {
        a:hover {
          color: #48A7FF;
        }

        &:nth-child(2) {
          margin-left: 17px;
        }
      }

      @media only screen and (max-width: 820px) {
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
      }
    }

    .footer-social-media {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 50%;
      
      @media only screen and (max-width: 820px) {
        flex-direction: row;
        justify-content: center;
        width: 100%;
      }
      
      .icons {
        display: flex;
        justify-content: space-between;
        width: 100%;

        margin-top: 1.5rem;
        
        svg {
          font-size: 2rem;
          transition: fill 1.3s;

          &:hover {
            fill: #48A7FF;
          }
        }
      }
    }

    & > div {
      & > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 1.125rem;
      }

      span:nth-child(2) {
        margin-top: 1.5rem;
      }
    }
  }
`;

const Side = styled.div`
  grid-row: side-start / side-end;
	grid-column: side-start / side-end;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .side {
    width: 100%;
    height: 100%;
  }
`;

const Results = styled.div`
  grid-row: results-start / results-end;
	grid-column: results-start / results-end;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .results {
    width: 100%;
    height: 100%;
  }
`;

const Practice = styled.div`
  grid-row: practice-start / practice-end;
	grid-column: practice-start / practice-end;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .practice {
    width: 100%;
    height: 100%;
  }
`;

const Filter = styled.div`
  grid-row: filter-start / filter-end;
	grid-column: filter-start / filter-end;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .filter {
    width: 100%;
    height: 100%;
  }
`;

export { HomeContainer, Side, Results, Practice, Filter };
