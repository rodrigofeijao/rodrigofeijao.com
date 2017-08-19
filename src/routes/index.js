/**
 *  Libraries
 */
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

/**
 *  Pages
 */
import Homepage   from '../common/Pages/Homepage';
import Clients    from '../common/Pages/Clients';
import Work       from '../common/Pages/Work';
import About      from '../common/Pages/About';
import Contacts   from '../common/Pages/Contacts';
import Example    from '../common/Pages/Example';


const Routes = () => (
    <div className="page">
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/clients" component={Clients}/>
        <Route exact path="/work" component={Work}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contacts" component={Contacts}/>
        <Route exact path="/example" component={Example}/>
    </div>
);

export default Routes