/**
 *  Libraries
 */
import React from 'react';
import Helmet from 'react-helmet';


/**
 *  Components
 */
import WorkList from '../Components/WorkList';
import Footer from '../Components/Footer';


export default class Work extends React.Component {

    constructor(props) {
        super(props);
        this.state = { itemActive : false }
        this.itemActiveToggle = this.itemActiveToggle.bind(this)
    }

    itemActiveToggle() {
        this.setState({ itemActive : !this.state.itemActive })
    }

    render() {
        return (
            <div className="work">
                <Helmet
                title="Work"
                meta={[
                    {property: 'description', content: 'Work page'},
                    ]} />

                <div className={`title ${(this.state.itemActive)?'active':''}`}>
                    Featured<br />
                    Work
                </div>

                <WorkList active={this.itemActiveToggle}/>

                <Footer />

            </div>
        );
    }
}