import React from 'react';
import useStyles from './style';

// Dummy data simualting a database response
const analytics = [
  {
    rate: '97%',
    desc: 'senectus et netus et malesuada'
  },
  {
    rate: '95%',
    desc: 'ullamcorper malesuada proin libero nunc consequat'
  },
  {
    rate: '66%',
    desc: 'urna duis convallis convallis tellus id interdum'
  },
  {
    rate: '61%',
    desc: 'massa vitae tortor condimentum lacinia quis'
  },
  {
    rate: '56%',
    desc: 'id aliquet risus feugiat in ante metus dictum'
  }
];

const Analysis = () => {
  const classes = useStyles();

  return (
    <section className={classes.analysis}>
      <div className="container">
        <div className={classes.content}>
          <h2 className="title">sed pulvinar proin gravida hendrerit</h2>
          <div className={classes.rateGroup}>
            {analytics.map((analysis, index) => {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <div key={index} className="rate">
                  <p className="rate-value">{analysis.rate}</p>
                  <p className="rate-desc">{analysis.desc}</p>
                </div>
              );
            })}
            <div className="rate source">
              <span>*Eurotrak 2018</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analysis;
