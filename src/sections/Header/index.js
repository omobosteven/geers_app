import React from 'react';
import logo from 'assets/logo.svg';
import useStyles from './style';

const Header = () => {
  const classes = useStyles();

  return (
    <nav className={classes.navbar}>
      <div className="container">
        <img src={logo} alt="logo" className="logo" />
        <div className={classes.textWrapper}>
          <p className="text text-phone">030 1234 5678</p>
          <p className="text text-date">Mo - Sa &nbsp;&nbsp; 9 - 18 Uhr</p>
        </div>
      </div>
    </nav>
  );
};

export default Header;
