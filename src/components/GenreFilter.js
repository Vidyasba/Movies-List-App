import React from "react";
import "../styles/genreFilter.css";

function GenreFilter({ genres }) {
  const handleGenreClick = (genre) => {
    console.log(`Filtering by ${genre}`);
  };

  return (
    <div className="genreFilter">
      <h2>Filter by Genre</h2>
      <div className="genreButtons"> {/* Corrected class name here */}
        {genres.map((genre, index) => (
          <button key={index} onClick={() => handleGenreClick(genre)}>
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
}
export default GenreFilter;
