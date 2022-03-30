import React from 'react';
import Card from './Card';

export default function Cards(props) {
  const {movies = []} = props;
  return (
    <div className="cards">
        {movies.length ? movies.map(card => (
            <Card key={card.imdbID} {...card} />
            )) : <h2 className='cards__null'>Nothing found😢</h2>}
    </div>
  )
}
