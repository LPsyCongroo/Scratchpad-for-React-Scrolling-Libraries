import React from "react";
import { render } from "react-dom";
import Carousel from "./Carousel";
import ScrollSpy from "react-scrollspy";
import styled from "styled-components";

const Li = styled.li`
  list-style: none;
  a {
    color: red;
    transition: 0.5s;
  }
  &.is-current a {
    color: blue;
  }
`;
const Section = styled.section`
  background: palevioletred;
  height: 150vh;
`;
const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
`;

class App extends React.Component {
  render = () => (
    <div>
      <div>
        <Section id="section-1">section 1</Section>
        <Section id="section-2">section 2</Section>
        <Section id="section-3">section 3</Section>
      </div>
      <Nav>
        <ScrollSpy
          items={["section-1", "section-2", "section-3"]}
          currentClassName="is-current"
        >
          <Li>
            <a href="#section-1">section 1</a>
          </Li>
          <Li>
            <a href="#section-2">section 2</a>
          </Li>
          <Li>
            <a href="#section-3">section 3</a>
          </Li>
        </ScrollSpy>
      </Nav>
    </div>
  );
}

render(<App />, document.getElementById("root"));
