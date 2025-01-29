import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import backArrow from '../../assets1/cards1/backarrow.jpg'; // Corrected path

import video1 from '../../assets1/vedio1.mp4';
import video2 from '../../assets1/vedio2.mp4';
import video3 from '../../assets1/vedio3.mp4';
import video4 from '../../assets1/vedio4.mp4';
import video5 from '../../assets1/vedio5.mp4';
import video6 from '../../assets1/vedio6.mp4';
import video7 from '../../assets1/vedio7.mp4';
import video8 from '../../assets1/vedio8.mp4';
import video9 from '../../assets1/vedio9.mp4';
import video10 from '../../assets1/vedio10.mp4';

const Player = () => {
  const { id } = useParams(); // Get the video ID from the URL
  const [videoSrc, setVideoSrc] = useState('');
  const navigate = useNavigate(); // Hook to navigate programmatically
  const [videoTitle, setVideoTitle] = useState('');

  useEffect(() => {
    const videoMap = {
      '1': { src: video1, title: 'Game of Thrones' },
      '2': { src: video2, title: 'Forrest Gump' },
      '3': { src: video3, title: 'Jokerss' },
      '4': { src: video4, title: 'MS Dhoni: The Untold Story' },
      '5': { src: video5, title: 'Harry Potter' },
      '6': { src: video6, title: 'The Lord of the Rings' },
      '7': { src: video7, title: 'Avengers: Infinity War' },
      '8': { src: video8, title: 'Mad 2' },
      '9': { src: video9, title: 'Warm Bodies' },
      '10': { src: video10, title: 'Money Heist' },
    };

    if (videoMap[id]) {
      setVideoSrc(videoMap[id].src);
      setVideoTitle(videoMap[id].title);
    }
  }, [id]);

  const handleBackClick = () => {
    navigate('/'); // Navigate to the home page
  };

  const toggleFullScreen = (event) => {
    const videoElement = event.target;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoElement.requestFullscreen();
    }
  };

  return (
    <div style={playerContainerStyle}>
      <button onClick={handleBackClick} style={backButtonStyle}>
        <img src={backArrow} alt="Back" style={{ width: '30px', height: '30px', marginTop: '70px' }} />
      </button>

      <h2>Playing {videoTitle}</h2>
      {videoSrc ? (
        <video
          controls
          autoPlay
          onClick={toggleFullScreen}
          style={videoStyle}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p>Video not found or invalid ID.</p>
      )}
    </div>
  );
};

const backButtonStyle = {
  position: 'absolute',
  top: '20px',
  left: '20px',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  zIndex: 10, // Ensure it appears on top of the video
};

const playerContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh', // Full viewport height
  width: '100vw', // Full viewport width
  overflow: 'hidden',
  backgroundColor: '#000', // Background color
};

const videoStyle = {
  width: '100%',
  height: 'auto', // Maintain aspect ratio
  maxHeight: '90vh', // Ensure it fits within the viewport height
};

export default Player;







// import React, { useEffect, useState } from 'react';
// import './player.css';
// import back_arrow_icon from '../../assets1/backarrow.jpg';
// import { useParams } from 'react-router-dom';
// const Player = () => {
  


//   const {id}=useParams()



// const [apiData,setApiData]=useState({
//   name:"",
//   key:"",
//   published_at:"",
//   typeof:""
// })

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmFhMDkxYjczMmZiOTJjZGJhYzFiM2QyZTcyZGVlYiIsIm5iZiI6MTczNTEzMjMzNC41OTEsInN1YiI6IjY3NmMwNGFlNzdlODI5OTVkMTdlYmQzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y5OKmljRYpyK95v-f2gdORZLN-E4ZXvtgM1lMCZkHzI'
//   }
// };

//   useEffect(()=>{
//     fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
//     .then(res => res.json())
//     .then(res => setApiData(res.results[0]))
//     .catch(err => console.error(err));
//   },[])

 
//   return (
//     <div className="player">
//       {/* Back Arrow */}
//       <img src={back_arrow_icon} alt="Back Arrow" onClick={() => window.history.back()} />

//       {/* Full-Screen Video Player */}
      
//       <iframe
//         className="player-iframe"
//         src={`https://www.youtube.com/embed/${apiData.key}`}
//         title="Trailer"
//         frameBorder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//       ></iframe>

//       {/* Details */}
//       <div className="player-details">
//         <p>{apiData.published_at}</p>
//         <p>{apiData.name}</p>
//         <p>{apiData.type}</p>
//       </div>
//     </div>
//   );
// };

// export default Player;







