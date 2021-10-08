import { makeStyles } from '@mui/styles';
import { colors, fontSizes, fontFamily } from 'theme.js';

const useStyles = makeStyles({
  navbar: {
    width: '100%',

    '& .container': {
      paddingTop: 12,
      paddingBottom: 18,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },

    '& .logo': {
      cursor: 'pointer'
    }
  },

  textWrapper: {
    '& .text': {
      margin: 0,
      color: colors.primary,
      fontFamily: fontFamily.secondary,

      '&-phone': {
        fontSize: fontSizes.xLarge
      },

      '&-date': {
        display: 'none'
      }
    }
  },

  '@media screen and (min-width: 1024px)': {
    navbar: {
      '& .container': {
        paddingTop: 30,
        paddingBottom: 26
      }
    },

    textWrapper: {
      '& .text': {
        textAlign: 'right',

        '&-phone': {
          fontSize: fontSizes.xxLarge
        },

        '&-date': {
          display: 'block',
          fontSize: fontSizes.small,
          marginTop: 1
        }
      }
    }
  }
});

export default useStyles;
