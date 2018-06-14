import React from "react";
import {
  Link,
  Element,
  scroller
} from "react-scroll";

import Header from "./styled/Header";
import Section from "./styled/Section";
import Nav from "./styled/Nav";

import Overflow from './overflow';

const linkConfig = {
  activeClass: "active",
  spy: true,
  smooth: "easeInCubic",
  hashSpy: true,
  offset: 0,
  duration: 500,
  delay: 0,
  isDynamic: true,
  ignoreCancelEvents: false
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: {
        nav: false,
        section1: false,
        section2: false,
        section3: false
      }
    };
  }

  componentDidMount(){
    this.scrollTo("header");
  }

  scrollTo(to) {
    // const offset = to.startsWith('section') ? 300 : 0;
    scroller.scrollTo(to, {
      duration: 500,
      smooth: true,
      // offset
    });
  }

  handleSetActive = to => {
    this.setState(prev => ({
      visible: Object.assign(prev.visible, { [to]: true })
    }));
  };

  handleSetActiveNav = to => {
    console.log('header is active!');
    this.setState(prev => ({
      visible: Object.assign(prev.visible, { nav: false })
    }));
  }

  handleSetInactiveNav = to => {
    console.log('header is NOT active!');
    
    this.setState(prev => ({
      visible: Object.assign(prev.visible, { nav: true })
    }));
  }

  render = () => (
    // If the last one is visible, then they all should be and we've reached the end. Turn on scrolling.
    <React.Fragment>
      <Nav isVisible={this.state.visible.nav} >
        <ul>
          <Link 
            {...linkConfig} 
            to="header" 
            onSetActive={this.handleSetActiveNav}
            onSetInactive={this.handleSetInactiveNav}
            offset={0}
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
      <Overflow isNavVisible={this.state.visible.nav}></Overflow>
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
