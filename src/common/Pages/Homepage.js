/**
 *  Libraries
 */
import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

/**
 *  Actions
 */
import { fetchMovies }  from '../../actions/moviesActions';

@connect((store)=>{
    return {
        movieList : store.movies,
    }
})
export default class Homepage extends React.Component {
  
  constructor(props) {
    super(props);
  }

  componentWillMount() {
      this.props.dispatch(fetchMovies());
  }

  render() {

    let movies = this.props.movieList;

    if (movies.done) {
        return(
            <div className="movies">
                <Helmet
                title="Homepage"
                meta={[
                    {property: 'description', content: 'Homepage page'},
                    ]} />
                <ul>
                    {movies.movies.map( (article, i) => (<li key={i}>{article.title}</li>) )}
                </ul>
            </div>
        )
    }

    return (<div><h1>LOADING</h1></div>)

  }
}