import React, { Component } from 'react';
import PropTypes from 'prop-types'
import SearchResultCard from './SearchResultCard';
import Loading from '../Loading';

function DisplayResults ({ results }) {
  return (
    <ul>
      {results.map((search) => {
        const { Title, Year, imdbID, Poster, Rating, Genre, Director, Plot} = search;

        return (
          <li 
          className="search-card-closed"
          key={imdbID}>
            <SearchResultCard
              title={Title}
              year={Year}
              imdbID={imdbID}
              poster={Poster}
              rating={Rating}
              genre={Genre}
              director={Director}
              plot={Plot}
            >
            
            </SearchResultCard>
          </li>
        )
      })}
    </ul>
  )
};

DisplayResults.propTypes = {
  results: PropTypes.array.isRequired
}

const getMovieData = async (title) => {  
  const res = await fetch(`https://www.omdbapi.com/?s=${title}&apikey=e4ae7b4c`)
  const json = await res.json();  
  return json;
}

class SearchContainer extends Component {
  state = {
    title: '',
    results: [],
    error: null
  }

  handleChange = (event) => {
    this.setState({
      title: event.target.value
    })
  };
  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      results: null,
      error: null
    });

    getMovieData(this.state.title)
      .then((data) => {        
        this.setState({
          results: Array.from(data.Search)
        })
      })
      .catch(() => {
        this.setState({
          error: 'There was an error fetching the movie list'          
        })
      });
  };  

  isLoading = () => {
    const {results} = this.state;
    return results === null && this.state.error === null;
  };

  render(){
    const { results, error} = this.state;

    return (
      <div className="search-container">
          <form onSubmit={this.handleSubmit}>
            <input 
              type='text' 
              id='title'
              placeholder='Movie Title'
              autoComplete='off'
              value={this.state.title}
              onChange={this.handleChange}
            />
            <button
              type='submit'
              disabled={!this.state.title}
              className="search-button"
            >
              <i className="fa fa-search"></i>
            </button>
          </form>

          {this.isLoading() && <Loading text='Searching'/>}

          {error && <p className="error">No results</p>}

          {results && <DisplayResults results={results}/>}
      </div>
     
    );
  }
};

export default SearchContainer;