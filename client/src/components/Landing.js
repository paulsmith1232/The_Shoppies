import React from 'react';
import SearchContainer from './Search/SearchContainer';
import ListContainer from './List/ListContainer';
import BannerContainer from './Banner/BannerContainer';


const Landing = () => {
  return (
    <div className='row'>
      <BannerContainer />
      <div className='rowB'>
        <SearchContainer />
        <ListContainer />
      
      </div>
    </div>
   
  );
};

export default Landing;