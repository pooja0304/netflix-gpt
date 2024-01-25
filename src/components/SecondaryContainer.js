import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      {/* movie list - popular
        movie list - trending
        movie -list - horror
      */}
      <div className="-mt-52 relative z-20 mx-50">
      <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
      <MovieList title="Popular" movies={movies?.popularMovies} />
      <MovieList title="Trending" movies={movies?.nowPlayingMovies} />
      <MovieList title="Bollywood" movies={movies?.nowPlayingMovies} />
      <MovieList title="Horror" movies={movies?.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
