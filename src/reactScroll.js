import React from "react";
import { render } from "react-dom";
import styled, { injectGlobal, keyframes } from "styled-components";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll,
  scrollSpy,
  scroller
} from "react-scroll";

injectGlobal`
  * {
    margin: 0;
    padding: 0;
  }
`;

const Nav = styled.nav`
  font-size: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  > ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    height: 100vh;

    > li {
      list-style: none;
      height: 100%;
      width: 50px;

      background: #eee;
      :nth-child(2n) {
        background: lightblue;
      }

      > .active {
        background: black;
      }
    }
  }
`;

const Page = styled.div`
  div section {
    height: 100vh;

    background: #456;
  }
  div:nth-child(2n) section {
    background: #890;
  }
  > div {
    transition: 1s;
    opacity: 0.5;
  }
`;

class App extends React.Component {
  componentDidMount() {
    Events.scrollEvent.register("begin", function(to, element) {
      console.log("begin", to, element);
    });

    Events.scrollEvent.register("end", function(to, element) {
      console.log("end", to, element);
      element.style.opacity = 1;
    });

    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }

  scrollTo(to) {
    scroller.scrollTo(to, {
      duration: 800,
      delay: 100,
      smooth: true
    });
  }

  render = () => (
    <Page>
      <Nav>
        <ul>
          <li onClick={() => this.scrollTo(1)}>
            <a href="">1</a>
          </li>
          <li onClick={() => this.scrollTo(2)}>
            <a href="">2</a>
          </li>
          <li onClick={() => this.scrollTo(3)}>
            <Link
              activeClass="active"
              to="meow"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={500}
              delay={1000}
              isDynamic={true}
              // onSetActive={this.handleSetActive}
              // onSetInactive={this.handleSetInactive}
              ignoreCancelEvents={false}
            >
              3
            </Link>
          </li>
          <li onClick={() => this.scrollTo(4)}>
            <a href="">4</a>
          </li>
          <li onClick={() => this.scrollTo(5)}>
            <a href="">5</a>
          </li>
        </ul>
      </Nav>
      <Element name="1">
        <section>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
          commodi accusamus enim, sequi est obcaecati! Sunt neque nesciunt
          soluta tempore aut quibusdam, dignissimos itaque voluptate et quaerat
          mollitia placeat natus!m
        </section>
      </Element>
      <Element name="2">
        <section>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
          commodi accusamus enim, sequi est obcaecati! Sunt neque nesciunt
          soluta tempore aut quibusdam, dignissimos itaque voluptate et quaerat
          mollitia placeat natus!m
        </section>
      </Element>
      <Element name="3">
        <section>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
          commodi accusamus enim, sequi est obcaecati! Sunt neque nesciunt
          soluta tempore aut quibusdam, dignissimos itaque voluptate et quaerat
          mollitia placeat natus!m
        </section>
      </Element>
      <Element name="4">
        <section>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
          commodi accusamus enim, sequi est obcaecati! Sunt neque nesciunt
          soluta tempore aut quibusdam, dignissimos itaque voluptate et quaerat
          mollitia placeat natus!m
        </section>
      </Element>
      <Element name="5">
        <section>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
          commodi accusamus enim, sequi est obcaecati! Sunt neque nesciunt
          soluta tempore aut quibusdam, dignissimos itaque voluptate et quaerat
          mollitia placeat natus!m
        </section>
      </Element>
    </Page>
  );
}

render(<App />, document.getElementById("root"));
