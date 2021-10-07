import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './style';

/* The Card component will overflow when given a long text,
I'm working on it.
  */
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
  htmlText: PropTypes.node.isRequired,
  reverse: PropTypes.bool
};

Card.defaultProps = {
  reverse: false
};

export default Card;
