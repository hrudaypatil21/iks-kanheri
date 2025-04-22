import React from 'react';
import './InfoCard.css';

const InfoCard = ({ name, info, details, image, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <article className={`cave-card ${isEven ? 'even' : 'odd'}`}>
      {isEven ? (
        <>
          <div className="card-image">
            <img src={image} alt={name} loading="lazy" />
          </div>
          <div className="card-content">
            <h3>{name}</h3>
            <p className="info-text">{info}</p>
            <ul className="details-list">
              {details.map((detail, i) => (
                <ul key={i}>{detail}</ul>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <>
          <div className="card-content">
            <h3>{name}</h3>
            <p className="info-text">{info}</p>
            <ul className="details-list">
              {details.map((detail, i) => (
                <ul key={i}>{detail}</ul>
              ))}
            </ul>
          </div>
          <div className="card-image">
            <img src={image} alt={name} loading="lazy" />
          </div>
        </>
      )}
    </article>
  );
};

const InfoCards = ({ caves }) => {
  return (
    <section className="cave-cards-container">
      <h2 className="section-title">Notable Caves of Kanheri</h2>
      <div className="cave-cards-list">
        {caves.map((cave, index) => (
          <InfoCard 
            key={cave.id}
            name={cave.name}
            info={cave.info}
            details={cave.details}
            image={cave.image}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default InfoCards;