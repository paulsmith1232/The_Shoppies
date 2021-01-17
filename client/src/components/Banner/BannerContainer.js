import React from 'react';
import { connect } from 'react-redux';
import { getList } from '../../selectors/listSelectors';
import BannerCard from './BannerCard';

function PrintBannerCards ({ results }) {
  if(results.length >= 5){    
    return (
      <div className="banner-top">
        <h2 className="center ">YOUR NOMINATIONS</h2>
        <ul className="banner-container">
          {results.map((search) => {
            const { title, year, imdbID, poster, plot } = search.content;  
            return (
              <BannerCard 
                key={imdbID}
                title={title}
                year={year}
                imdbID={imdbID}
                poster={poster}
                plot={plot}
              />               
            )
          })}
        </ul>      
      </div>
    )
  } 
  return null;  
};

const BannerContainer = ({ results }) => (
  <PrintBannerCards results={results}/>
);

const mapStateToProps = state => {
  const results = getList(state);
  return { results };
}

export default connect(mapStateToProps)(BannerContainer);