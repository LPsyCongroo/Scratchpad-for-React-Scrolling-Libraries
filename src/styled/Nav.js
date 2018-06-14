import styled from 'styled-components';

export default styled.nav`
  position: absolute;
  top: 100vh;
  left: 0;
  transform: translateZ(0);

  color: white;

  li {
    list-style: none;
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

  transition: opacity 0.2s;
  opacity: 0;

  ${({ isVisible }) => isVisible && `
    position: fixed;
    top: 0;
    left: 0;
    opacity: 1;
    `
}

`;
