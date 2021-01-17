import React from 'react';

export default function BannerCard({ poster, title, imdbID, year, plot}) {    
  return (
    <div className="banner-card" >
      <div className="banner-card-left">
        <img
          className="poster"
          src={poster}
          alt={`Image not Found`}
        />
      </div>
      <div className="banner-card-right">
        <h3>{title}</h3>
        <p>{year}</p>       
      </div>     
    </div>
    
  )  
}