import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  //   console.log("movies", movies);
  if (!movies) return;

  return (
    <div className="px-4 py-4">
      <h1 className="text-2xl text-white py-2">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide px-3">
        <div className="flex gap-2">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
