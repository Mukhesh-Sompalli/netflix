// import React, { useRef, useEffect, useState } from 'react';
// import './titlecards.css';
// import { Link } from 'react-router-dom';

// const Titlecards = ({ title, category }) => {
//   const cardsRef = useRef();
//   const [movies, setMovies] = useState([]); // State to store fetched movies
//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTM5YWU3NWE2ZmI0MzQ3MWNlNzQ1MDBmY2Q3Y2Y5NCIsIm5iZiI6MTczNTIxODQzOC43NjQsInN1YiI6IjY3NmQ1NTA2YWE4ZjMxNTlkNjEyOTEwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4OnpfIK1hcM0K--wPmPQyFljXCEQ8yFENrqoiBfHOR0'
//     }
//   };

//   // Fetch movie data when component mounts or when category changes
//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await fetch(
//           `https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`,
//           options
//         );
//         const data = await response.json();
//         setMovies(data.results); // Store the fetched movies in state
//       } catch (error) {
//         console.error('Error fetching movies:', error);
//       }
//     };

//     fetchMovies();
//   }, [category]); // Re-fetch when category changes

//   // Handlers for mouse events and scrolling
//   const handleMouseEnter = () => {
//     cardsRef.current.style.cursor = 'grabbing';
//     cardsRef.current.addEventListener('mousemove', handleMouseMove);
//   };

//   const handleMouseMove = (event) => {
//     const scrollSpeed = 2;
//     cardsRef.current.scrollLeft -= event.movementX * scrollSpeed;
//   };

//   const handleMouseLeave = () => {
//     cardsRef.current.style.cursor = 'grab';
//     cardsRef.current.removeEventListener('mousemove', handleMouseMove);
//   };

//   const handleCardClick = (index) => {
//     const card = cardsRef.current.children[index];
//     card.scrollIntoView({ behavior: 'smooth', inline: 'center' });
//   };

//   return (
//     <div>
//       <div className="title_cards">
//         <h2>{title ? title : "Popular on Netflix"}</h2>
//         <div
//           className="cards_list"
//           ref={cardsRef}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           {movies.map((movie, index) => (
//             <Link to={`/player/${movie.id}`}
//               className="card"
//               key={index}
//               onClick={() => handleCardClick(index)}
//             >
//               <img
//                 src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                 alt={movie.title}
//               />
//               <p>{movie.title}</p>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Titlecards;


// Titlecards.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './titlecards.css';

// Corrected import paths
import video1Thumbnail from '../../assets1/thumbnails/vedio1.jpg';
import video2Thumbnail from '../../assets1/thumbnails/vedio2.jpg';
import video3Thumbnail from '../../assets1/thumbnails/vedio3.jpg';
import video4Thumbnail from '../../assets1/thumbnails/vedio4.jpg';
import video5Thumbnail from '../../assets1/thumbnails/vedio5.jpg';
import video6Thumbnail from '../../assets1/thumbnails/vedio6.jpg';
import video7Thumbnail from '../../assets1/thumbnails/vedio7.jpg';
import video8Thumbnail from '../../assets1/thumbnails/vedio8.jpg';
import video9Thumbnail from '../../assets1/thumbnails/vedio9.jpg';
import video10Thumbnail from '../../assets1/thumbnails/vedio10.jpg';

const Titlecards = ({ title }) => {
  const navigate = useNavigate();
  const [shuffledVideos, setShuffledVideos] = useState([]);

  const videos = [
    { id: 1, title: 'Game of Thrones', thumbnail: video1Thumbnail, src: '/assets1/vedio1.mp4' },
    { id: 2, title: 'Forrest Gump', thumbnail: video2Thumbnail, src: '/assets1/vedio2.mp4' },
    { id: 3, title: 'Joker', thumbnail: video3Thumbnail, src: '/assets1/vedio3.mp4' },
    { id: 4, title: 'MAD', thumbnail: video4Thumbnail, src: '/assets1/vedio4.mp4' },
    { id: 5, title: 'Harry Potter', thumbnail: video5Thumbnail, src: '/assets1/vedio5.mp4' },
    { id: 6, title: 'The Lord of the Rings', thumbnail: video6Thumbnail, src: '/assets1/vedio6.mp4' },
    { id: 7, title: 'Infinity Saga', thumbnail: video7Thumbnail, src: '/assets1/vedio7.mp4' },
    { id: 8, title: 'Video 8', thumbnail: video8Thumbnail, src: '/assets1/vedio8.mp4' },
    { id: 9, title: 'Video 9', thumbnail: video9Thumbnail, src: '/assets1/vedio9.mp4' },
    { id: 10, title: 'Video 10', thumbnail: video10Thumbnail, src: '/assets1/vedio10.mp4' },
  ];

  const shuffleVideos = (array) => {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
    }
    return shuffledArray;
  };

  useEffect(() => {
    setShuffledVideos(shuffleVideos(videos));
  }, []);

  const handleVideoClick = (id) => {
    navigate(`/player/${id}`); // Navigate to player page with video ID
  };

  return (
    <div>
      <div className="title_cards">
        <h2>{title ? title : "Your Videos"}</h2>
        <div className="cards_list">
          {shuffledVideos.map((video) => (
            <div
              className="card"
              key={video.id}
              onClick={() => handleVideoClick(video.id)} // Use dynamic video ID
            >
              <img
                src={video.thumbnail}  // Use the imported image
                alt={video.title}
                style={{ width: '100%', borderRadius: '8px', cursor: 'pointer' }}
              />
              <p>{video.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Titlecards;
