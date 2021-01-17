import React from 'react';
import { connect } from 'react-redux';
import { getList } from '../../selectors/listSelectors';
import ListCard from './ListCard';

function DisplayList ({ results }) {
  return (
    <ul>
      {results.map((search) => {
        const { title, year, imdbID, poster, plot } = search.content;

        return (
          <li 
            className="list-card-closed"
            key={imdbID}>
            <ListCard
              title={title}
              year={year}
              imdbID={imdbID}
              poster={poster}
            />
            
          </li>
        )
      })}
    </ul>
  )
};

const ListContainer = ({ results }) => (
  <ul className="list-container">
    <h2 className="center list-container-heading">Nominations</h2>
    <DisplayList results={results}/>
  </ul>
);


const mapStateToProps = state => {
  const results = getList(state);
  return { results };
}

export default connect(mapStateToProps)(ListContainer);
