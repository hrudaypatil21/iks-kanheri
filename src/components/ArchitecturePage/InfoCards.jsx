import React from 'react';
import './InfoCard.css';

const InfoCard = ({ name, info, image, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`cave-card ${isEven ? 'even' : 'odd'}`}>
      {isEven ? (
        <>
          <div className="card-image">
            <img src={image} alt={name} />
          </div>
          <div className="card-content">
            <h3>{name}</h3>
            <p>{info}</p>
          </div>
        </>
      ) : (
        <>
          <div className="card-content">
            <h3>{name}</h3>
            <p>{info}</p>
          </div>
          <div className="card-image">
            <img src={image} alt={name} />
          </div>
        </>
      )}
    </div>
  );
};

const InfoCards = ({ caves }) => {
  return (
    <section className="cave-cards-container">
      <h2>Notable Caves of Kanheri</h2>
      <div className="cave-cards-list">
        {caves.map((cave, index) => (
          <InfoCard 
            key={cave.id || index}
            name={cave.name}
            info={cave.info}
            image={cave.image}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default InfoCards;