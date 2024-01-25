import React from "react";
import MovieCard from "./MovieCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const responsive =       {
    0: {
        items: 1,
    },
    1024: {
        items: 8,
        itemsFit: 'contain',
    }
  }
const MovieList = ({ title, movies }) => {
  const items = movies?.map((movie) => (
    <MovieCard poster_path={movie?.poster_path} key={movie.id} />
  ));
  return (
    <div>
      <h1 className="text-xl ml-10 mb-2 text-white">{title}</h1>
      <div className="mx-8">
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
        />
      </div>
    </div>
  );
};

export default MovieList;
