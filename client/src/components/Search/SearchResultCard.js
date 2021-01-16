import React from 'react';
import { connect } from 'react-redux';
import { addListItem } from '../../actions/index'
import { getListState } from '../../selectors/listSelectors';

class SearchResultCard extends React.Component {  
 
  handleAddListItem = () => {    
    this.props.addListItem(this.props);
  }

  render() {
    return (
      <div className="search-card-closed">
        <ul>       
          <li>
            <img
              className="poster"
              src={this.props.poster}
              alt={`Avatar for ${this.props.title}`}
            />
          </li>
          <li className="">
            <h2>
             {this.props.title}           
            </h2>
          </li>
          <li>
           <h2>
              <a href={this.props.imdbID}>
                {this.props.year}
              </a>
            </h2>
          </li>
          <li>
            <button
              type='submit'
              onClick={this.handleAddListItem}
              disabled={this.props.results.allIds.includes(this.props.imdbID) || this.props.results.allIds.length >= 5}
            >
              Submit
            </button>
          </li>      
        </ul>      
      </div>
    )
  }
}
const mapStateToProps = state => { 
  const results = getListState(state);
  return { results };
}

export default connect(
  mapStateToProps,
  { addListItem }
)(SearchResultCard)
