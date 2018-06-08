import styled from "styled-components";
import fadeIn from './fadeIn.keyframes';

export default styled.nav`
  position: fixed;

  color: white;

  li {
    list-decoration: none;
    padding: 20px;

    background: #373712;

    :hover{
      cursor: pointer;
    }
  }

  .active li {
    background: #949427;
    color: #060606;
  }

  ${({isVisble}) => isVisble && `
    animation: ${fadeIn} 0.3s forwards;
  `}

`
