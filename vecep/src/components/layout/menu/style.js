import styled from 'styled-components';

const Navbar = styled.nav`
display: flex;
position: relative;
height: 70px;
justify-content: space-between;
align-items: center;
background-color: #ececec;
top: 0;
width: 100%;

& > a{
  margin-left: 100px; 
}

a {
  text-decoration: none;
  color: #1b4469;
  font-size: 1.5rem;
}

.dropdown-container {
  display: flex;
  align-items: center;
}

.dropdown {
  position: relative;
  display: inline-block;
  margin-right: 70px;
  height: 100%;

  .dropdown-content {
    display: none;
    position: absolute;
    background: #f1f1f1;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    min-width: 120px;
    z-index: 3;
    text-align: center;
    border-radius: 10px;
    left: 50%;
    transform: translate(-50%, 0);
    overflow: hidden;

    a {
      color: black;
      padding: 12px 16px;
      box-sizing: border-box;
      text-decoration: none;
      font-size: 1.2rem;
      display: block;
      width: 100%;

      &:hover {
        background-color: #ddd;
      }
    }
  }
  
  &:hover .dropdown-content {
    display: block;
  }
}
`;

export default Navbar;
