import React from 'react';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img} />
        </div>
        <span>By {props.card.headline}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

export default Card;
