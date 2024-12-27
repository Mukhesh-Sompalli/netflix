// import React from 'react'
// import './home.css'
// import Navbar from '../../components/navbar/navbar'
// import hero_banner from '../../assets1/banner_image.jpg'
// import hero_title from '../../assets1/hero_title.jpg'
// const Home = () => {
//   return (
//     <div className='home'>
//       <div className="hero"></div>
//       <Navbar/>
//       <div className="hero">
//         <img src={hero_banner}  alt='' className='banner-img'/>
//         <div className="hero-caption">
//           <img src={hero_title} alt="" className='caption-img'/>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, id.
//           </p>
//           <div className="hero-btns">
//             <button className='btn'><img src="" alt="" /></button>
//             <button className='btn dark_info'><img src="" alt="" /></button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home


import React from 'react';
import './home.css';
import Navbar from '../../components/navbar/navbar';
import hero_banner from '../../assets1/banner_image.jpg';
import hero_title from '../../assets1/hero_title.jpg';
import play_icon from '../../assets1/button.jpg'; // Replace with your actual play icon image path
import info_icon from '../../assets1/moreinfo.jpg'; // Replace with your actual info icon image path
import Titlecards from '../../components/titlecards/titlecards';
import Footer from '../../components/footer/footer';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            A group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="Play" className="btn-icon" />
              Play
            </button>
            <button className="btn dark_info">
              <img src={info_icon} alt="More Info" className="btn-icon" />
              More Info
            </button>
          </div>
        </div>
      </div>
      <div className="morecards">
        <Titlecards title={"Blockbuster Movies"} category={"top_rated"}/>
        <Titlecards title={"Only On Netflix"} category={"popular"}/>
        <Titlecards title={"Upcoming"} category={"upcoming"}/>
        <Titlecards title={"Top Picks For You"} category={"now_playing"}/>
        {/* <Titlecards title={"New Releases"} />
        <Titlecards title={"Trending Now"} />
        <Titlecards title={"Family Favorites"} /> */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
