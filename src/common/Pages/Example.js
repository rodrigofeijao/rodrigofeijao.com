/**
 *  Libraries
 */
import React from 'react';
import Helmet from 'react-helmet';
import ScrollSwipe from 'scroll-swipe';
import { connect } from 'react-redux';
import {Motion, spring, TransitionMotion} from 'react-motion';
import createReactClass from 'create-react-class'

/**
 *  Actions
 */
import { fetchMovies }  from '../../actions/moviesActions';



@connect((store)=>{
    return {
        movieList : store.movies,
    }
})
export default class Example extends React.Component {

    constructor(props) {
        super(props)
        this.state = { show : false }

        this.toggle = this.toggle.bind(this)
    }

    componentWillMount() {
        this.props.dispatch(fetchMovies());
    }

    toggle(){
        this.setState({show:!this.state.show})
    }

    render() {

        let animEnter = {
            x : spring(1),
            y : spring(20)
        }

        let animLeave = {
            x : spring(0),
            y : spring(0)
        }

        let movies = this.props.movieList;

    if (movies.done) {
        return (
            <div>

            <Motion defaultStyle={{x:0, y:0}} style={(this.state.show)?animEnter:animLeave}>
            {value => <div style={{opacity: value.x, transform: `translateY(${value.y}px)` }}><h1>Titulo {}</h1></div>}
            </Motion>
            
            <hr/>

            <p><button onClick={this.toggle}>Toggle</button></p>
            <p><button onClick={()=>this.ss.listen()}>listen</button></p>

            <hr />

            <hr/>

                <div className="movies">
                    <Helmet
                    title=" "
                    meta={[
                        {property: 'description', content: 'Homepage page'},
                        ]} />
                    <ul>
                        {movies.movies.map( (article, i) => (<li key={i}>{article.title}</li>) )}
                    </ul>
                </div>

            </div>
        )
    }

    return (<div><h1>LOADING</h1></div>)
  }
}

class Demo extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>DEMO DEMO DEMO</div>
    );
  }
}


class PageOne extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page">Page One</div>
    );
  }
}

class PageTwo extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page">Page Two</div>
    );
  }
}


