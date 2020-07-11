import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../../services/axios";
import request from "../../services/request";
import "./banner.css";

const Banner = () => {
  const [movie, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(request.fetchNetflixOriginals);
      //getting randomness we use Math.floor(Math.random() * data.results.length-1);
      setMovies(
        data.results[Math.floor(Math.random() * data.results.length - 1)]
      );
      return data;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      {/* background image */}
      {/* title */}
      {/* div> 2 buttons */}
      {/* descriptions */}
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>

        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
};

export default Banner;
