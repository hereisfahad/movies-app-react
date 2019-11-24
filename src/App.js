import React, { useState, useEffect } from "react";
import Moviecard from "./components/movieCard/Moviecard";
import "./App.css";

function App() {
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    // Update the document title using the browser API
    fetch(`http://www.omdbapi.com/?t=${search}&apikey=8b827095`)
      .then(response => response.json())
      .then(users => {
        console.log(users);
        setMovie(users);
      });
  }, [search]);
  console.log(movie);

  return (
    <div className="App">
      <input
        style={{ margin: "3em" }}
        type="text"
        onChange={e => {
          console.log(e.target.value);
          setSearch(e.target.value);
        }}
      />
      {movie.Title !== undefined ? (
        <Moviecard movie={movie} />
      ) : (
        "Seach a movie by name."
      )}
      <p style={{ position: "fixed", bottom: "0" }}>Using OMDB API</p>
    </div>
  );
}

export default App;
