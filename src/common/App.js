/**
 *  Libraries
 */
import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

/**
 *  Routes
 */
import Routes from '../routes/index'

const App = () => (
    <div>
        <Helmet
            titleTemplate="%s - React Redux Boilerplate">
            <meta charSet="utf-8" />
        </Helmet>

        <header>
            <h1>Main Title</h1>
            <ul>
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <hr/>
        </header>
        
        <Routes />
    </div>
);

export default App