import React from 'react';
import { connect } from 'react-redux';
import { getList } from '../../selectors/listSelectors';
import BannerCard from './BannerCard';

function PrintBannerCards ({ results }) {
  if(results.length >= 5){
    
    console.log(results)
    return (
      <div className="">
        <h1 className="center">Thank You!</h1>
        <ul className="banner-container">
          {results.map((search) => {
            const { title, year, imdbID, poster, plot } = search.content;  
            return (
                  <BannerCard 
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
  <ul>
    <PrintBannerCards results={results}/>
  </ul>
);


const mapStateToProps = state => {
  const results = getList(state);
  return { results };
}

export default connect(mapStateToProps)(BannerContainer);