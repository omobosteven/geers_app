import React from 'react';
import { Button } from 'components';
import service from 'assets/service_symbol.svg';
import price from 'assets/price_symbol.svg';
import satisfaction from 'assets/satisfaction_symbol.svg';
import tick from 'assets/tick.svg';
import useStyles from './style';

const Success = () => {
  const classes = useStyles();

  return (
    <section className={classes.success}>
      <div className="container">
        <div className={classes.content}>
          <ul className="checklist">
            <li className="check">
              <div>
                <img src={tick} alt="check" />
              </div>
              <p>fermentum dui faucibus in ornare quam viverra orci sagittis</p>
            </li>
            <li className="check">
              <div>
                <img src={tick} alt="check" />
              </div>
              <p>consequat ac felis donec et odio pellentesque diam</p>
            </li>
            <li className="check">
              <div>
                <img src={tick} alt="check" />
              </div>
              <p>ultrices gravida dictum fusce ut placerat orci</p>
            </li>
          </ul>
          <div className={classes.ribbons}>
            <div className="imageGroup">
              <div className="imageWrapper">
                <img src={service} alt="service" />
              </div>
              <div className="imageWrapper">
                <img src={price} alt="price" />
              </div>
              <div className="imageWrapper">
                <img src={satisfaction} alt="satisfaction" />
              </div>
            </div>

            <Button text="at consectetur lorem" className="cta-btn" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;
