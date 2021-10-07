import React from 'react';
import { Button } from 'components';
import Card from './components/Card';
import useStyles from './style';

const Focus = () => {
  const classes = useStyles();

  return (
    <section className={classes.focus}>
      <div className="container">
        <Card
          htmlText={
            <>
              <p className="text">
                convallis a cras semper auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor
                consequat eget id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac
              </p>
              <p className="text">
                iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor
                at auctor urna nunc id cursus metus aliquam eleifend mi
              </p>
            </>
          }
          image={1}
        />

        <Button text="at consectetur lorem" className="cta-btn" />

        <Card
          htmlText={
            <>
              <p className="text">
                viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu
                felis bibendum ut
              </p>
              <p className="text">
                vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus
                at augue eget arcu dictum varius duis at consectetur
              </p>
              <p className="text">quam elementum pulvinar etiam non quam lacus suspendisse faucibus</p>
            </>
          }
          image={2}
          reverse
        />
      </div>
    </section>
  );
};

export default Focus;
