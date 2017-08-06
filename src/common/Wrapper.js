/**
 *  Libraries
 */
import React from 'react';

export default class Wrapper extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
      {this.props.children}
      </div>
    );
  }
}
