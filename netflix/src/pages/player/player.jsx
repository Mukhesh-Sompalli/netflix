// import React, { useEffect, useState } from 'react';
// import './player.css';
// import back_arrow_icon from '../../assets1/backarrow.jpg';

// const Player = () => {

// const [apiData,setApiData]=useState({
//   name:"",
//   key:"",
//   published_at:"",
//   typeof:""
// })

//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTN1NzczZDIwY2M2Y2NhNWQ4YWVjMjQzNTd1NDc1ZCIsInN1YiI6IjY2MjIyMDFhYWUzODQzMDE4NzJhNTJjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vPDW2QwNr9hIRdOvJx_x8hbHnDYZGHMtnZwfkqb3J8U'
//     }
//   };


//   useEffect(()=>{
//   fetch('https://api.themoviedb.org/3/movie/693134/videos?language=en-US', options)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(response => setApiData(response.results[0]))
//     .catch(err => console.error('Fetch error:', err));
//   },[])
//   return (
//     <div className="player">
//       {/* Back Arrow */}
//       <img src={back_arrow_icon} alt="Back Arrow" onClick={() => window.history.back()} />

//       {/* Full-Screen Video Player */}
      
//       <iframe
//         className="player-iframe"
//         src={`https://www.youtube.com/embed/dQw4w9WgXcQ/${apiData.key}`}
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








import React, { useEffect, useState } from 'react';
import './player.css';
import back_arrow_icon from '../../assets1/backarrow.jpg';
import { useParams } from 'react-router-dom';
const Player = () => {
  


  const {id}=useParams()



const [apiData,setApiData]=useState({
  name:"",
  key:"",
  published_at:"",
  typeof:""
})

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmFhMDkxYjczMmZiOTJjZGJhYzFiM2QyZTcyZGVlYiIsIm5iZiI6MTczNTEzMjMzNC41OTEsInN1YiI6IjY3NmMwNGFlNzdlODI5OTVkMTdlYmQzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y5OKmljRYpyK95v-f2gdORZLN-E4ZXvtgM1lMCZkHzI'
  }
};

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  },[])

 
  return (
    <div className="player">
      {/* Back Arrow */}
      <img src={back_arrow_icon} alt="Back Arrow" onClick={() => window.history.back()} />

      {/* Full-Screen Video Player */}
      
      <iframe
        className="player-iframe"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="Trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      {/* Details */}
      <div className="player-details">
        <p>{apiData.published_at}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;







