import React, { useEffect, useState } from 'react';
import './main.scss';
import Cards from './../components/Card/Cards';
import axios from 'axios';
import preloader from '../Spinner-3.gif';
import Search from '../components/Search/Search';

export default function Main(props) {
  const [movies,setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  async function fetchDB(){
    const resSetMovies = await axios('http://www.omdbapi.com/?apikey=78584b3c&s=matrix');
    setMovies(resSetMovies.data.Search);
    setLoading(false);
  }
  fetchDB();
}, []);

  async function searchMovies(string, type = 'all')  {
  const resSearchMovies = await axios(`http://www.omdbapi.com/?apikey=78584b3c&s=${string}${type !== 'all' ? `&type=${type}` : ''}`)
  setMovies(resSearchMovies.data.Search);
}

  return (
    <main className='main__content'>
        <div className="container"> 
          <Search searchMovies={searchMovies}/>
       { loading ? <img src={preloader} alt="preloader-img" className='main__loading' />
      : (<Cards movies={movies} />)  }
        </div>
        </main>
  )
}
