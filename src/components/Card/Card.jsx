import React from 'react';
import './card.scss';

export default function Card(props) {
    const {Title, Year, imdbID, Type, Poster} = props;
  return (
    <div className='card' id={imdbID}>
        <div className="card__items">
            <img src={Poster} alt="card-film" className="card__img" />
        <div className="card__info">
        <h2 className="card__title">{Title}</h2>
        <span className="card__year">{Year} <p className="card__types">{Type}</p></span>
        </div>
        </div>
        </div>
  )
}
