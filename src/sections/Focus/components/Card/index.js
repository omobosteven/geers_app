import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './style';

const Card = ({ image, htmlText, reverse }) => {
  const classes = useStyles({ image, reverse });

  return (
    <div className={classes.card}>
      <div className="image" />
      <div className={classes.textWrapper}>{htmlText}</div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.number.isRequired,
  htmlText: PropTypes.string.isRequired,
  reverse: PropTypes.bool
};

Card.defaultProps = {
  reverse: false
};

export default Card;
