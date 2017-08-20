/**
 *  Libraries
 */
import React from 'react';
import { Link, browserHistory, withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import ScrollSwipe from 'scroll-swipe';
import { connect } from 'react-redux';


/**
 *  Actions
 */
import { incrementCounter, decrementCounter }  from '../actions/counterActions';


/**
 *  Routes
 */
import Routes from '../routes/index'


/**
 *  Components
 */
import Grid from './Components/Grid';


@connect((store)=>{
    return {
        counter : store.counter,
        pages : store.pages,
    }
})
class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {show: false }

        var document = typeof document === 'undefined' ? '' : document;

        if (document != '') {
            const ss = new ScrollSwipe({
                target: document,
                scrollCb: this.handleScroll.bind(this),
            });
            this.ss = ss;
        }


        this.handleScroll = this.handleScroll.bind(this);
        this.toggle = this.toggle.bind(this);
    }


    handleScroll(e) {
        if (e) {
            if (e.direction === "VERTICAL") {
                if (e.intent == 0 ) {
                    console.log('prev')
                    this.props.dispatch(decrementCounter())
                    // this.goTo('work')
                }else{
                    console.log('next')
                    this.props.dispatch(incrementCounter())
                    // this.goTo('about')
                }
            }else{
                this.ss.listen();
            }
        }else{
            this.ss.listen()
        }

    }

    goTo(path) {
        this.props.history.push('/'+path)
    }

    navNext(props, page) {
        props.dispatch(incrementCounter())
        // setTimeout( ()=> this.goTo(page) , 1200)
    }

    navPrev(props, page) {
        props.dispatch(decrementCounter())
        // setTimeout( ()=> this.goTo(page) , 1200)
    }

    getNextPage(props) {
        let pathname = props.location.pathname.substr(1);
        let index = props.pages.indexOf(pathname);

        if( index != -1){
            return props.pages[index+1]
        }else{
            return props.pages[index]
        }
    }

    getPrevPage(props) {
        let pathname = props.location.pathname.substr(1);
        let index = props.pages.indexOf(pathname);

        if( index != -1){
            return props.pages[index-1]
        }else{
            return props.pages[index]
        }
    }

    toggle() {
        this.setState({ show : !this.state.show })
    }
    
    render() {

    return (
        <div className="wrapper">
            <Helmet
                titleTemplate="%s Rodrigo Feijao - Front End Developer">
                <meta charSet="utf-8" />
            </Helmet>

            <button className="headerToggle" onClick={this.toggle}>+</button>
            
            <header className={`header-temp ${(this.state.show)?'show':''}`}>
                <ul>
                    <li><Link to="/">Homepage</Link></li>
                    <li><Link to="/clients">Clients</Link></li>
                    <li><Link to="/work">Work</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contacts">Contacts</Link></li>
                    <li><Link to="/example">Example</Link></li>
                </ul>
                    
                <hr/>
                    <button onClick={()=>this.handleScroll()}>Unlock</button>
                <hr/>
                    Counter: {this.props.counter}
                    <button onClick={ ()=>this.navNext( this.props, this.getNextPage(this.props)) } >NEXT</button>
                    <button onClick={ ()=>this.navPrev( this.props, this.getPrevPage(this.props)) } >PREV</button>
                <hr/>

            </header>
            
            <Grid />
            
            <Routes />
        </div>
    )}

}

export default withRouter(App)