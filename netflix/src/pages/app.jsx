// // import React, { useEffect } from 'react';
// // import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'; // Import BrowserRouter for routing

// // import Home from './home/home';
// // import Login from '../pages/login/login';
// // import Player from '../pages/player/player';
// // import { onAuthStateChanged } from 'firebase/auth';
// // import { auth } from '../firebase';

// // const App = () => {
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, async (user) => {
// //       if (user) {
// //         console.log("logged in");
// //         navigate('/'); // Redirect to home if logged in
// //       } else {
// //         console.log("logged out");
// //         navigate('/login'); // Redirect to login if logged out
// //       }
// //     });

// //     return () => unsubscribe(); // Cleanup the listener on unmount
// //   }, [navigate]);

// //   return (
// //     <div>
// //       {/* Wrap Routes inside Router (BrowserRouter) */}
// //       <Router>
// //         <Routes>
// //           <Route path="/" element={<Home />} />
// //           <Route path="/login" element={<Login />} />
// //           <Route path="/player/:id" element={<Player />} />
// //         </Routes>
// //       </Router>
// //     </div>
// //   );
// // };

// // export default App;



// import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'; // Import BrowserRouter for routing

// import Home from './home/home';
// import Login from '../pages/login/login';
// import Player from '../pages/player/player';
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from '../firebase';

// const App = () => {

//   const navigate = useNavigate();
//   useEffect(()=>{
//     onAuthStateChanged(auth, async(user)=>{
//       if(user){
//         console.log("Logged In");
//         navigate('/')
//       }else{
//         console.log("Logged Out")
//         navigate('/login')
//       }
//     })
//   },[])

//   return (
//     <div>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/login' element={<Login/>}/>
//         <Route path='/player/:id' element={<Player/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default App





// import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // Import Router-related components

// import Home from './home/home';
// import Login from '../pages/login/login';
// import Player from '../pages/player/player';
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from '../firebase';

// const App = () => {
//   const location = useLocation(); // Using the useLocation hook correctly

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         console.log("Logged In");
//         // Redirect based on authentication status
//       } else {
//         console.log("Logged Out");
//         // Redirect based on authentication status
//       }
//     });

//     return () => unsubscribe(); // Cleanup on unmount
//   }, []);

//   return (
//     <div>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/player/:id' element={<Player />} />
//       </Routes>
//     </div>
//   );
// };

// const AppWrapper = () => {
//   return (
//     <Router> {/* Wrapping everything inside Router */}
//       <App /> 
//     </Router>
//   );
// };

// export default AppWrapper;




















import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './home/home';
import Login from '../pages/login/login';
import Player from '../pages/player/player';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const App = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate
  const [user, setUser] = useState(null); // State to track user authentication

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Logged In");
        setUser(user); // Update state when logged in
      } else {
        console.log("Logged Out");
        setUser(null); // Clear user state when logged out
      }
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  // Function to handle video click (to navigate to the player page)
  const handleVideoClick = (videoId) => {
    // Navigate to a player page, passing videoId in the URL
    navigate(`/player/${videoId}`); // Use dynamic video ID
  };

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player />} />
      </Routes>
    </div>
  );
};

const AppWrapper = () => {
  return (
    <Router> {/* Wrapping everything inside Router */}
      <App />
    </Router>
  );
};

export default AppWrapper;
