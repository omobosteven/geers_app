import { makeStyles } from '@mui/styles';
import { colors, fontSizes } from 'theme.js';

const useStyles = makeStyles({
  analysis: {
    marginTop: 51
  },

  content: {
    '& .title': {
      fontSize: fontSizes.title,
      fontWeight: 'bold',
      lineHeight: 1.6,
      marginBottom: 0
    }
  },

  rateGroup: {
    '& .rate': {
      display: 'flex',

      '& .rate-value': {
        fontSize: fontSizes.xxTitle,
        color: colors.primary,
        fontWeight: 'bold',
        marginRight: 11
      },

      '& .rate-desc': {
        fontSize: fontSizes.large,
        alignSelf: 'center'
      }
    }
  },

  '@media screen and (min-width: 768px)': {
    rateGroup: {
      marginTop: 50,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',

      '& .rate': {
        flexDirection: 'column',
        flexBasis: '47%',
        marginBottom: 40,

        '& .rate-value': {
          fontSize: fontSizes.largeTitle,
          margin: '0 0 5px'
        },

        '& .rate-desc': {
          margin: 0,
          fontWeight: 'bold',
          alignSelf: 'flex-start'
        },

        '&.source': {
          '& span': {
            display: 'block',
            marginTop: 'auto',
            marginBottom: 30
          }
        }
      }
    }
  },

  '@media screen and (min-width: 1280px)': {
    rateGroup: {
      '& .rate': {
        flexBasis: '30%'
      }
    }
  }
});

export default useStyles;
