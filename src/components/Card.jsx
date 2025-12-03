import React from 'react';

function Card({ title, description, siteLink, sourceLink, techStack, image }) {
  return (
    <div className='cards'>
      {image && <img src={require(`../images/${image}`)} alt={title} className='card-image' />}
      <h3 className='card-title'>{title}</h3>
      <p className='card-para'>{description}</p>
      {techStack && (
        <p className='card-tech'>
          <strong>Tech Stack:</strong> {techStack.join(", ")}
        </p>
      )}
      <div className='card-button-container'>
        <button className='button' onClick={() => window.open(siteLink, '_blank')}>View Site</button>
        <button className='button' onClick={() => window.open(sourceLink, '_blank')}>View Source</button>
      </div>
    </div>
  );
}

export default Card;