/**
 *  Libraries
 */
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

/**
 *  Pages
 */
import Homepage       from '../common/Pages/Homepage';
import About      from '../common/Pages/About';


const Routes = () => (
    <div>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/about" component={About}/>
    </div>
);

export default Routes