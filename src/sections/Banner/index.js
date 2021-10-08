import React from 'react';
import { Button, Rating } from 'components';
import platz from 'assets/Platz.svg';
import shops from 'assets/shops.svg';
import ekomi from 'assets/ekomi.svg';
import useStyles from './style';

const Banner = () => {
  const classes = useStyles();

  return (
    <section className={classes.banner}>
      <div className={classes.bannerImage_mobile} />
      <div className="container">
        <div className={classes.card}>
          <h1 className="title">quis commodo odio aenean sed adipiscing diam donec adipiscing</h1>
          <Button text="montes" />
          <div className={classes.logoWrapper}>
            <div className={classes.imageWrapper}>
              <img src={platz} alt="platz logo" />
            </div>
            <div className={classes.imageWrapper}>
              <img src={shops} alt="shops" />
            </div>
            <div className={classes.imageWrapper}>
              <img src={ekomi} alt="ekomi" />
            </div>
            <Rating rate="4,1/5" className="rating" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
