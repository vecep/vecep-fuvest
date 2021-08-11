import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

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
    padding: 0 100px;
  }

  .home-intro {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 70px;
    padding-bottom: 50px;

    .text {
      font-size: 1.5em;

      span {
        display: block;
        font-size: 1.2em;
        margin-block-end: 0.83em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
      }

      @media only screen and (max-width: 1100px) {
        width: 100%;
      }
    }

    .image {
      display: flex;
      justify-content: center;
      align-items: flex-start;

      img {
        transform: scaleX(-1);
        height: 300px;
        margin-left: 70px;
      }

      @media only screen and (max-width: 1100px) {
        display: none;
      }
    }
  }

  .home-statistics {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 275px;
    margin: 50px 0 130px 0;
    padding: 70px 100px 50px 100px;
    background-color: #282727;
    color: white;
    
    span {
      text-align: center;
      font-size: 3em;
    }
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
    height: 275px;
    margin-top: 50px;
    color: white;

    .footer-info {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 50%;

      .about {
        a:hover {
          color: #48A7FF;
        }
      }
    }

    .social-media {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 50%;
      box-sizing: border-box;

      div > div:last-of-type {
        display: inline-block;
        
        svg, img {
          font-size: 2rem;
          margin: 1.5rem 1.5rem 0 0;
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

      span:first-child {
        font-size: 1.5em;
      }

      span:nth-child(2) {
        margin-top: 1.5rem;
      }
    }
    
    span {
      text-align: center;
      font-size: 1em;
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

const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(45deg, #21CBF3 30%, #48A7FF 90%)',
    borderRadius: 2,
    color: 'white',
    height: 37,
    width: 205,
    padding: '0 30px',
    boxSizing: 'border-box',
    boxShadow: '0 3px 5px 2px rgba(27, 68, 105, .3)',
    fontWeight: 'bold',

    '&:hover': {
      background: 'linear-gradient(45deg, #21f39f 30%, #21CBF3 90%)',
    }
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

export { HomeContainer, StyledButton, Side, Results, Practice, Filter };
