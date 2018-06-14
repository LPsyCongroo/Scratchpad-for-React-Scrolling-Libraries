import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  background: #060606;
  color: white;
`;

export const Nav = styled.nav`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  color: white;

  ul {
    display: flex;
    justify-content: space-around;

  }
  li {
    list-style: none;
    padding: 20px;
    width: 100%;
    background: #373712;

    :hover{
      cursor: pointer;
    }
  }

  ${({ index }) => `
    li:nth-child(${index + 1}){
      background: #949427;
      color: #060606;
    }
  `}
`;
