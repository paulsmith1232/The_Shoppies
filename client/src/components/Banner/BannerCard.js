import React from 'react';

export default function BannerCard({ poster, title, imdbID, year, plot}) {    
  console.log(plot)
  return (
    <div className="banner-card">
      <div className="banner-card-left">
        <img
          className="poster"
          src={poster}
          alt={`Avatar for ${title}`}
        />
      </div>
      <div className="banner-card-right">
        <h3>{title}</h3>
        <p>{year}</p>       
        <p>{plot}</p>
      </div>     
    </div>
    
  )  
}