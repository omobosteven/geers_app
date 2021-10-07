import { makeStyles } from '@mui/styles';
import { colors, fontSizes } from 'theme.js';

const useStyles = makeStyles({
  footer: {
    background: colors.darkBackground,
    fontSize: fontSizes.xLarge,
    padding: 13,
    textAlign: 'center',
    color: colors.white,

    '& p': {
      margin: 0
    },

    '& p:last-of-type': {
      display: 'none'
    }
  },

  '@media screen and (min-width: 1023px)': {
    footer: {
      padding: 27,

      '& p:last-of-type': {
        display: 'block'
      }
    }
  }
});

export default useStyles;
