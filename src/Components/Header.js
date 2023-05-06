import React from 'react'
import moviePoster from '../images/movie-poster.jpg';

const Header = () => {
  return (
    <header className="text-center my-3 row" id="home">
        <h1 className="bg-dark bg-gradient text-uppercase text-warning shadow rounded col w-70 ">Star Wars</h1>
      <img src={moviePoster} alt="Movie Poster" className="img-fluid w-100" />
    </header>
  )
}

export default Header