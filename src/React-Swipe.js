import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard, autoPlay, virtualize } from 'react-swipeable-views-utils';
import flowRight from 'lodash/flowRight';

import { Section, Nav } from './React-Swipe.styled';

const Swipeable = flowRight(
  bindKeyboard,
  autoPlay,
  virtualize
)(SwipeableViews);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  handleChangeIndex = index => {
    console.log(index);
    this.setState({
      index
    });
  };

  sections = [1,2,3,4,5];

  slideRenderer = params => {
    const {index, key} = params;
    const {sections} = this;

    const i = index % sections.length;

    return (
      <Section key={key} >Section {sections[i]}</Section>
    )
  }

  renderLis = () => this.sections
    .map((num, i) => (
      <li 
        key={i} 
        onClick={() => this.handleChangeIndex(i)}
      >{num}</li>
    ));


  render() {
    const { index } = this.state;

    return (
      <React.Fragment>
        <Nav index={index % this.sections.length}>
          <ul>
            {this.renderLis()}
          </ul>
        </Nav>
        <Swipeable 
          resistance 
          index={index} 
          onChangeIndex={this.handleChangeIndex}
          interval={5000}
          slideRenderer={this.slideRenderer}
          slideCount={100 * this.sections.length}
        >
        </Swipeable>
      </React.Fragment>
    );
  }
}
