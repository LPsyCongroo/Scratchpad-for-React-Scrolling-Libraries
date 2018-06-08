import styled from 'styled-components';

export default styled.div`
  width: 100vw;
  height: 100vh;
  /* overflow-y: ${({reachedEnd}) => reachedEnd ? 'scroll' : 'hidden'}; */
  overflow-y: scroll;
  overflow-x: hidden;
`