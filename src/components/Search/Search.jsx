import React, { useState } from "react";
import "./search.scss";

export default function Search({ searchMovies }) {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");
  const handelOnKey = (e) => {
    if (e.key === "Enter") {
      searchMovies(search, type);
    }
  };

  const handelSort = (e) => {
    setType(() => (e.target.dataset.type), () => {searchMovies(search, type);});
  };

  return (
    <>
      <div className="sort__movies">
        <div className="search__sort">
          <label htmlFor="">
            <input
              type="radio"
              name="search-btn"
              className="seacrh__type"
              data-type="all"
              onChange={handelSort}
              checked={type === "all"}
            />
            <p className="search__types-txt">All</p>
          </label>
          <label htmlFor="">
            <input
              type="radio"
              name="search-btn"
              className="seacrh__type"
              data-type="movie"
              onChange={handelSort}
              checked={type === "movie"}
            />
            <p className="search__types-txt">Movies</p>
          </label>
          <label htmlFor="">
            <input
              type="radio"
              name="search-btn"
              className="seacrh__type"
              data-type="series"
              onChange={handelSort}
              checked={type === "series"}
            />
            <p className="search__types-txt">Serials</p>
          </label>
        </div>
        <div className="search">
          <input
            type="search"
            className="search__input"
            placeholder="Search movies"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handelOnKey}
            
          />
        </div>
      </div>
    </>
  );
}
