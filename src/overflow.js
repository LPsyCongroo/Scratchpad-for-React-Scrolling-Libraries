import React from 'react';

export default class Overflow extends React.Component {
  componentDidMount() {
    document.body.style.overflow = 'hidden';
  }
  componentWillReceiveProps({ isNavVisible }) {
    if (isNavVisible) { document.body.style.overflowY = 'scroll'; }
  }
  render() {
    return (
      <span />
    );
  }
}
