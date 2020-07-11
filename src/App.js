import React from "react";
import Row from "./components/row/Row";
import request from "./services/request";
import "./App.css";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        movieUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" movieUrl={request.fetchTrending} />
      <Row title="Top Rated" movieUrl={request.fetchTopRated} />
      <Row title="Action Movies" movieUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" movieUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" movieUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" movieUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries Movies" movieUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
