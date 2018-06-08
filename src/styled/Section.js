import styled from "styled-components";
import fadeIn from './fadeIn.keyframes';

export default styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  height: 100vh;
  background: #060606;
  color: white;

  h2 {
    font-size: 2rem;
    opacity: 0;
  }

  .p1 {
    opacity: 0;
  }

  .p2 {
    opacity: 0;
  }

  ${({ isVisible }) =>
    isVisible &&
    `
    h2 {
      animation: ${fadeIn} 0.3s 0.5s forwards
    }
    .p1 {
      animation: ${fadeIn} 0.3s 1s forwards
    }
    .p2 {
      animation: ${fadeIn} 0.3s 1.5s forwards
    }
  `};
`;
