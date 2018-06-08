import React from "react";
import { render } from "react-dom";
import { injectGlobal } from "styled-components";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll,
  scrollSpy,
  scroller
} from "react-scroll";

import Header from "./styled/Header";
import Section from "./styled/Section";
import Nav from "./styled/Nav";

import Traversify from './traversify';

injectGlobal`
  * {
    margin: 0;
    padding: 0;
  }
  html, body{
    font-family: sans-serif;
    overflow: hidden;
  }

`;

const linkConfig = {
  activeClass: "active",
  spy: true,
  smooth: true,
  hashSpy: true,
  offset: 0,
  duration: 500,
  delay: 0,
  isDynamic: true,
  ignoreCancelEvents: false
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: {
        section1: false,
        section2: false,
        section3: false
      }
    };
  }

  componentDidMount() {
    // Events.scrollEvent.register("begin", (to, element) => {
    //   console.log("begin", to, element);
    // });
    // Events.scrollEvent.register("end", (to, element) => {
    //   console.log("end", to, element);
    //   this.setState(prev => ({
    //     visible: Object.assign(prev.visible, { [to]: true })
    //   }));
    // });
    scrollSpy.update();
    this.scrollTo('header');


  }

  scrollTo(to) {
    scroller.scrollTo(to, {
      duration: 800,
      smooth: true
    });
  }

  handleSetActive = to => {
    this.setState(prev => ({
      visible: Object.assign(prev.visible, { [to]: true })
    }));
  };

  render = () => (
    <React.Fragment>
      <Nav active={this.state.active} isScrolling={this.state.isScrolling}>
        <ul>
          <Link 
            {...linkConfig} 
            to="header" 
            onSetActive={this.handleSetActive}
          >
            <li>0</li>
          </Link>
          <Link
            {...linkConfig}
            to="section1"
            onSetActive={this.handleSetActive}
          >
            <li>1</li>
          </Link>
          <Link
            {...linkConfig}
            to="section2"
            onSetActive={this.handleSetActive}
          >
            <li>2</li>
          </Link>
          <Link
            {...linkConfig}
            to="section3"
            onSetActive={this.handleSetActive}
          >
            <li>3</li>
          </Link>
        </ul>
      </Nav>
      <Element name="header">
        <Header id="header">
          <div className="logo" onClick={() => this.scrollTo("section1")} ></div>
        </Header>
      </Element>
      <Element name="section1">
        <Section isVisible={this.state.visible["section1"]}>
          <h2>Section 1</h2>
          <p className="p1">First text</p>
          <p className="p2">Second text</p>
        </Section>
      </Element>
      <Element name="section2">
        <Section isVisible={this.state.visible["section2"]}>
          <h2>Section 2</h2>
          <p className="p1">First text</p>
          <p className="p2">Second text</p>
        </Section>
      </Element>
      <Element name="section3">
        <Section isVisible={this.state.visible["section3"]}>
          <h2>Section 3</h2>
          <p className="p1">First text</p>
          <p className="p2">Second text</p>
        </Section>
      </Element>
    </React.Fragment>
  );
}

render(<App />, document.getElementById("root"));
