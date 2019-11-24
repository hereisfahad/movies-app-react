import React from "react";

export default function Moviecard({ movie }) {
  console.log(movie);
  const {
    Title,
    Actors,
    Awards,
    BoxOffice,
    Country,
    Director,
    Genre,
    Language,
    Plot,
    Poster,
    Production,
    Released,
    Runtime,
    Type,
    Writer,
    imdbRating
  } = movie;
  const styled = {
    display: "flex",
    margin: "2em"
  };
  const detailStyled = {
    display: "flex",
    flexDirection: "column",
    marginLeft: "2em",
    maxWidth: "50vw"
  };
  return (
    <div style={styled}>
      <img alt="robots" src={Poster} className="grow" />
      <div style={detailStyled}>
        <h1 style={{ textDecoration: "stlyed" }}>{Title}</h1>
        <p>Actors: {Actors}</p>
        <p>Awards: {Awards}</p>
        <p>Plot: {Plot}</p>
      </div>
    </div>
  );
}
