import React from 'react';
import PropTypes from "prop-types";
const Card = props => {
  return (
    <div className="card">
      <div className="headline">{}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img} alt={"dog"} />
        </div>
        <span>By {props.card.headline}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
 card:PropTypes.object.isRequired
};



export default Card;
