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

export { HomeContainer };
