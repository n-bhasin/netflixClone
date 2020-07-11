import React, { useState, useEffect } from "react";
import axios from "../../services/axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./row.css";

const url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, movieUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(movieUrl);
      setMovies(response.data.results);
      return response;
    }
    fetchData();
  }, [movieUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    console.log(movie);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {/* list of posters */}
        {movies.map((movie) => {
          return (
            //using isLargeRow to distinguish between netflix original and other images
            //also making some changes with css
            <img
              key={movie.id}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              onClick={() => handleClick(movie)}
              src={`${url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>

      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
