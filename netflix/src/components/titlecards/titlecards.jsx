import React, { useRef, useEffect, useState } from 'react';
import './titlecards.css';

const Titlecards = ({ title, category }) => {
  const cardsRef = useRef();
  const [movies, setMovies] = useState([]); // State to store fetched movies
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTM5YWU3NWE2ZmI0MzQ3MWNlNzQ1MDBmY2Q3Y2Y5NCIsIm5iZiI6MTczNTIxODQzOC43NjQsInN1YiI6IjY3NmQ1NTA2YWE4ZjMxNTlkNjEyOTEwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4OnpfIK1hcM0K--wPmPQyFljXCEQ8yFENrqoiBfHOR0'
    }
  };

  // Fetch movie data when component mounts or when category changes
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`,
          options
        );
        const data = await response.json();
        setMovies(data.results); // Store the fetched movies in state
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [category]); // Re-fetch when category changes

  // Handlers for mouse events and scrolling
  const handleMouseEnter = () => {
    cardsRef.current.style.cursor = 'grabbing';
    cardsRef.current.addEventListener('mousemove', handleMouseMove);
  };

  const handleMouseMove = (event) => {
    const scrollSpeed = 2;
    cardsRef.current.scrollLeft -= event.movementX * scrollSpeed;
  };

  const handleMouseLeave = () => {
    cardsRef.current.style.cursor = 'grab';
    cardsRef.current.removeEventListener('mousemove', handleMouseMove);
  };

  const handleCardClick = (index) => {
    const card = cardsRef.current.children[index];
    card.scrollIntoView({ behavior: 'smooth', inline: 'center' });
  };

  return (
    <div>
      <div className="title_cards">
        <h2>{title ? title : "Popular on Netflix"}</h2>
        <div
          className="cards_list"
          ref={cardsRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {movies.map((movie, index) => (
            <div
              className="card"
              key={index}
              onClick={() => handleCardClick(index)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Titlecards;
