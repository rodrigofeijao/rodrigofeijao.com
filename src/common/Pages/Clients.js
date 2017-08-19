/**
 *  Libraries
 */
import React from 'react';
import Helmet from 'react-helmet';

const Clients = () => (
    <div>
        <Helmet
        title="Clients"
        meta={[
            {property: 'description', content: 'Clients page'},
            ]} />

        <h1>Clients Component</h1>
        <br/>
        <img src="images/dog.jpg"/>
    </div>
);

export default Clients