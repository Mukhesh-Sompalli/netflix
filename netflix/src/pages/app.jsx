// import React from 'react'
// import Home from './home/home'
// import {Routes,Route} from 'react-router-dom'
// import Login from '../pages/login/login'
// const App = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/login' element={<Login/>}/>
//       </Routes>
     
//     </div>
//   )
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './home/home';
import Login from '../pages/login/login';

function App() {
  return (
    <Router> {/* Wrapping everything inside Router */}
      <Routes> {/* Define your routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={< Login/>} />
      </Routes>
    </Router>
  );
}

export default App;