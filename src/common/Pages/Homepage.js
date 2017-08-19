/**
 *  Libraries
 */
import React from 'react';
import Helmet from 'react-helmet';


export default class Homepage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="homepage">
            <Helmet
            title=" "
            meta={[
                {property: 'description',
                 content: 'Rodrigo Feijao, Front end developer'},
                ]} />

                <div className="shadow"></div>

                <div className="greeting">
                    hello there.<br/>
                    My name is Rodrigo I’m a
                </div>

                <div className="intro">Creative Technologist<br/>
                    and a problem solver,<br/>
                    based in central London.
                </div>

                <div className="cta">scroll</div>

            </div>
        )
    }
}