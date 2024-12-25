import React, { useRef } from 'react';
import './titlecards.css';
import cards_data from '../../assets1/cards/cards_data';

const Titlecards = ({title,categeries}) => {
  const cardsRef = useRef();

  // Handler to scroll horizontally when mouse enters the card list
  const handleMouseEnter = () => {
    cardsRef.current.style.cursor = 'grabbing';
    cardsRef.current.addEventListener('mousemove', handleMouseMove);
  };

  // Handler to move the cards on mouse move
  const handleMouseMove = (event) => {
    const scrollSpeed = 2; // Adjust the speed of scrolling
    cardsRef.current.scrollLeft -= event.movementX * scrollSpeed; // Move horizontally based on mouse movement
  };

  // Stop scrolling when mouse leaves the card list
  const handleMouseLeave = () => {
    cardsRef.current.style.cursor = 'grab';
    cardsRef.current.removeEventListener('mousemove', handleMouseMove);
  };

  // Handle card click to center the clicked card horizontally
  const handleCardClick = (index) => {
    const card = cardsRef.current.children[index];
    
    // Scroll horizontally to bring the clicked card to the center
    card.scrollIntoView({ behavior: 'smooth', inline: 'center' });
  };

  return (
    <div>
      <div className="title_cards">
        <h2>{title?title:"Popular on Netflix"}</h2>
        <div
          className="cards_list"
          ref={cardsRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {cards_data.map((card, index) => (
            <div
              className="card"
              key={index}
              onClick={() => handleCardClick(index)} // Click handler to scroll horizontally to the card
            >
              <img src={card.img} alt={card.name} />
              <p>{card.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Titlecards;
