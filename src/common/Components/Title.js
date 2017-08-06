/**
 *  Libraries
 */
import React from 'react';

export default class Title extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="title"><h1>{this.props.children}</h1></div>
    );
  }
}