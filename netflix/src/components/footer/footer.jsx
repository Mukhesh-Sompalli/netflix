// import React from 'react';
// import './footer.css';
// import facebook_icon from '../../assets1/cards1/facebook_icon.jpg';
// import instagram_icon from '../../assets1/cards1/insta_icon.jpg';
// import twitter_icon from '../../assets1/cards1/twitter_icon.jpg';
// import youtube_icon from '../../assets1/cards1/youtube_icon.jpg';

// const Footer = () => {
//   return (
//     <div className='footer'>
//       <div className="footer_icon">
//         <img src={facebook_icon} alt="" />
//         <img src={instagram_icon} alt=""/>
//         <img src={twitter_icon} alt=""/>
//         <img src={youtube_icon} alt=""/>
//       </div>
//       <ul>
//         <li>Audio Description</li>
//         <li>Help Centre</li>
//         <li>Gift Cards</li>
//         <li>Media Centre</li>
//         <li>Investor Relations</li>
//         <li>jobs</li>
//         <li>Terms of use</li>
//         <li>Privacy</li>
//         <li>Legal Notices</li>
//         <li>Cookie Preferences</li>
//         <li>Corporate Information</li>
//         <li>Contact Us</li>
//       </ul>
//       <p><div className="copyright_text"></div></p>
//     </div>
//   )
// }

// export default Footer



import React from 'react';
import './footer.css';
import facebook_icon from '../../assets1/cards1/facebook_icon.jpg';
import instagram_icon from '../../assets1/cards1/insta_icon.jpg';
import twitter_icon from '../../assets1/cards1/twitter_icon.jpg';
import youtube_icon from '../../assets1/cards1/youtube_icon.jpg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={facebook_icon} alt="Facebook Icon" />
        <img src={instagram_icon} alt="Instagram Icon" />
        <img src={twitter_icon} alt="Twitter Icon" />
        <img src={youtube_icon} alt="YouTube Icon" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p>© 2024 Netflix Inc</p>
    </div>
  );
};

export default Footer;

