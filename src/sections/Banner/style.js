import { makeStyles } from '@mui/styles';
import { colors, fontSizes } from 'theme.js';
import hero from 'assets/hero_image.png';
import heroMobile from 'assets/hero_mobile.png';

const useStyles = makeStyles({
  banner: {
    position: 'relative',

    '& .container': {
      padding: 0,
      width: '100%'
    }
  },

  bannerImage_mobile: {
    background: `url(${heroMobile})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    paddingTop: '35vh'
  },

  card: {
    background: colors.background,
    display: 'flex',
    flexDirection: 'column',
    padding: '32px 10px 43px 10px',

    '& .title': {
      fontSize: fontSizes.title,
      fontWeight: 'bold',
      textAlign: 'center',
      textTransform: 'uppercase',
      lineHeight: 1.6,
      marginBottom: 26
    }
  },

  logoWrapper: {
    marginTop: 34,
    display: 'flex',
    justifyContent: 'space-between',

    '& .rating': {
      width: '30%',
      alignSelf: 'center'
    }
  },

  imageWrapper: {
    width: '15%',

    '&:first-of-type': {
      width: '30%'
    },

    '& img': {
      width: '100%',
      height: 'auto'
    }
  },

  '@media screen and (min-width: 1024px)': {
    bannerImage_mobile: {
      display: 'none'
    },

    banner: {
      minHeight: 501,
      background: `url(${hero})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      display: 'flex',
      alignItems: 'center',

      '& .container': {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingLeft: '4%',
        paddingRight: '4%'
      }
    },

    card: {
      maxWidth: 376,
      padding: '47px 50px 43px 50px'
    },

    logoWrapper: {
      marginTop: 47
    }
  },


  '@media screen and (min-width: 1280px)': {
    banner: {
      backgroundPositionX: '20%',
    }
  },

  '@media screen and (min-width: 1440px)': {
    banner: {
      backgroundPositionY: '20%'
    }
  },

  '@media screen and (min-width: 1600px)': {
    banner: {
      backgroundPositionY: '45%'
    }
  }
});

export default useStyles;
