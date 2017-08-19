/**
 *  Libraries
 */
import React from 'react';
import Helmet from 'react-helmet';

const Contacts = () => (
    <div>
        <Helmet
        title="Contacts"
        meta={[
            {property: 'description', content: 'Contacts page'},
            ]} />

        <h1>Contacts Component</h1>
        <br/>
        <img src="images/dog.jpg"/>
    </div>
);

export default Contacts