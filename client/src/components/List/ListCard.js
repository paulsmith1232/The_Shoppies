import React from 'react';
import { connect } from 'react-redux';
import { removeListItem } from '../../actions/index'
import { getListState } from '../../selectors/listSelectors';

class ListCard extends React.Component {  
  handleRemoveListItem = () => {
    let index = this.props.results.allIds.indexOf(this.props.imdbID);        
    if (index > -1){
      this.props.results.allIds.splice(index, 1)
      delete this.props.results.byIds[this.props.imdbID]
    }    
    this.props.removeListItem(this.props.results)   
  }

  render() {
    return (
      <div>
        <ul className="list-card"> 
          <h2>
            {this.props.title}           
          </h2>
          <li>
            <h3>
              {this.props.year}              
            </h3>
          </li>
          <li>
            <button 
              type='submit'
              onClick={this.handleRemoveListItem}
            >
              Remove
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
  { removeListItem }
)(ListCard);

