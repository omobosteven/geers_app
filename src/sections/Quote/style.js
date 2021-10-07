import { makeStyles } from '@mui/styles';
import quoteBkMobile from 'assets/quote_mobile.png';
import quoteBk from 'assets/quote.png';
import { colors, fontSizes } from 'theme.js';

const useStyles = makeStyles({
  quote: {
    marginTop: 75,
    background: `url(${quoteBkMobile})`,
    backgroundSize: 'cover',
    backgroundPositionX: '70%',
    paddingBottom: 200
  },

  content: {
    display: 'flex',
    alignItems: 'flex-start',
    paddingTop: 20,

    '& .icon': {
      marginRight: 11
    },

    '& .text': {
      marginTop: 0,

      '& span': {
        color: colors.white,
        display: 'block'
      },

      '& span:first-of-type': {
        fontWeight: 'bold',
        fontSize: fontSizes.xLarge,
        lineHeight: 1.8
      }
    }
  },

  '@media screen and (min-width: 768px)': {
    content: {
      '& .text': {
        '& span:first-of-type': {
          fontSize: fontSizes.xxTitle,
          lineHeight: 1.5
        }
      }
    }
  },

  '@media screen and (min-width: 1024px)': {
    quote: {
      background: `url(${quoteBk})`,
      backgroundSize: 'cover',

      backgroundPositionY: '70%'
    },

    content: {
      paddingTop: 47,
      '& .text': {
        maxWidth: 347
      }
    }
  }
});

export default useStyles;
