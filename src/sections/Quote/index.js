import React from 'react';
import quotationMark from 'assets/quotation_marks.svg';
import useStyles from './style';

const Quote = () => {
  const classes = useStyles();

  return (
    <section className={classes.quote}>
      <div className="container">
        <div className={classes.content}>
          <i className="icon">
            <img src={quotationMark} alt="quotation mark" />
          </i>
          <p className="text">
            <span>nec nam aliquam sem et tortor consequat id</span>
            <span>mattis vulputate</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Quote;
