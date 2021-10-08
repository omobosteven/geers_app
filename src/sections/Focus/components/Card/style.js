import { makeStyles } from '@mui/styles';
import { colors, fontSizes } from 'theme.js';
import focus1 from 'assets/focus1.png';
import focus2 from 'assets/focus2.png';

const imageMapping = {
  1: focus1,
  2: focus2
};

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',

    '& .image': {
      flexBasis: 281,
      background: ({ image }) => `url(${imageMapping[image]}) no-repeat`,
      backgroundSize: 'cover',
      padding: '35px 16px'
    }
  },

  textWrapper: {
    background: colors.background,
    padding: '35px 16px',

    '& .text': {
      fontSize: fontSizes.large,
      marginBottom: 20
    }
  },

  '@media screen and (min-width: 768px)': {
    card: {
      flexDirection: 'row',
      minHeight: 510,

      '& .image': {
        flexBasis: '50%',
        padding: '42px 44px',
        order: ({ reverse }) => (reverse ? 1 : 0)
      }
    },

    textWrapper: {
      flexBasis: '50%',
      padding: '42px 44px',

      '& .text': {
        wordBreak: 'break-word'
      }
    }
  }
});

export default useStyles;
