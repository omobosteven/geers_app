import React from 'react';
import PropTypes from 'prop-types';
import stars from 'assets/stars.svg';
import clsx from 'clsx';
import useStyles from './style';

const Rating = ({ rate, className }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.wrapper, className)}>
      <div className="image-wrapper">
        <img src={stars} alt="star rating" />
      </div>
      <p className="rate">{rate}</p>
    </div>
  );
};

Rating.propTypes = {
  rate: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

Rating.defaultProps = {
  className: ''
};

export default Rating;
