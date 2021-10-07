import React from 'react';
import useStyles from './style';

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <p>Impressum/Datenschutz</p>
      <p>Copyright © 2020 sit amet. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
