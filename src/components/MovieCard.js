import React from "react";
import { useHistory } from "react-router-dom";
import moviesData from "../moviesData";

export default function MovieCard(props) {
  const { handleShowMovieDetails } = props;
  let history = useHistory();
  return (
    <div className="w-full flex flex-col items-center justify-center">
      {moviesData.map((movie) => (
        <div
          key={movie.id}
          className="flex w-2/3 p-2 hover:bg-gray-100 cursor-pointer border border-gray border-solid"
          onClick={() => {
            handleShowMovieDetails(movie);
            history.push(`/movie-details/${movie.id}`);
          }}
        >
          <div className="w-3/12 p-2">
            <img src={movie.posterurl} alt={movie.title} />
          </div>
          <div className="w-9/12 p-2">
            <h2 className="font-medium">{movie.title}</h2>
            <div className="py-1">
              <div className="flex">
                <span className="pr-1">Year: {movie.year}</span>
                <span className="pr-1">Duration: {movie.duration}</span>
                <span className="pl-1">IMDB Rating: {movie.imdbRating}</span>
                <div className="flex">
                  {movie.genres?.length
                    ? movie.genres.map((genre, index) => (
                        <span className="px-1" key={genre}>
                          {index === 0 ? genre : "|" + genre}
                        </span>
                      ))
                    : null}
                </div>
              </div>
              <div className="flex">
                Actors:
                {movie.actors?.length
                  ? movie.actors.map((actor, index) => (
                      <span className="px-1" key={actor}>
                        {index === 0 ? actor : "|" + actor}
                      </span>
                    ))
                  : null}
              </div>
            </div>
            <p className="text-justify">{movie.storyline}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
