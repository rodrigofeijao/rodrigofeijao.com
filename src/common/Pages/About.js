/**
 *  Libraries
 */
import React from 'react';
import Helmet from 'react-helmet';

const About = () => (
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

export default About