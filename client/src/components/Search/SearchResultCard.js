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
      <div>
        <ul className="search-content-closed"> 
          <li>
            <h2>
             {this.props.title}           
            </h2>
          </li>
          <li>
            <h3>
              {this.props.year}              
            </h3>
          </li>
          <li>
            <button 
              type='submit'
              onClick={this.handleAddListItem}
              disabled={this.props.results.allIds.includes(this.props.imdbID) || this.props.results.allIds.length >= 5}
            >
              Add
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
