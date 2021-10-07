import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import useStyles from './style';

const Button = ({ text, className }) => {
  const classes = useStyles();

  return (
    <button type="button" className={clsx(classes.btn, className)}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.objectOf(PropTypes.any)
};

Button.defaultProps = {
  className: {}
};

export default Button;
