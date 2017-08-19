/**
 *  Libraries
 */
import React from 'react';
import Helmet from 'react-helmet';


export default class About extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
          <div>
          <Helmet
          title="About"
          meta={[
              {property: 'description', content: 'About page'},
              ]} />

              <h1>About Component</h1>
              <br/>
              <img src="images/dog.jpg"/>
              </div>
              );
    }
}


