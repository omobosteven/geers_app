import { makeStyles } from '@mui/styles';
import { fontSizes } from 'theme.js';

const useStyles = makeStyles({
  success: {
    marginTop: 46
  },

  content: {
    display: 'flex',
    flexDirection: 'column',

    '& .checklist': {
      listStyleType: 'none',
      margin: 0,
      padding: 0
    },

    '& .check': {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 33,

      '& div': {
        marginRight: 13
      },

      '& p': {
        fontSize: fontSizes.large,
        margin: 0
      }
    }
  },

  ribbons: {
    '& .imageGroup': {
      marginBottom: 40,
      display: 'flex',
      justifyContent: 'space-between',

      '& .imageWrapper': {
        width: '30%',

        '& img': {
          width: '100%',
          height: 'auto'
        }
      }
    },

    '& .cta-btn': {
      width: '100%'
    }
  },

  '@media screen and (min-width: 500px)': {
    ribbons: {
      alignSelf: 'center'
    }
  },

  '@media screen and (min-width: 600px)': {
    content: {
      '& .check p': {
        fontSize: fontSizes.xLarge
      }
    },
  },

  '@media screen and (min-width: 768px)': {
    ribbons: {
      '& .imageGroup': {
        '& .imageWrapper': {
          width: '25%'
        }
      }
    }
  },

  '@media screen and (min-width: 1024px)': {
    success: {
      marginTop: 76
    },

    content: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',

      '& .checklist': {
        flexBasis: '50%'
      },

      '& .check': {
        width: '85%',
        fontWeight: 'bold'
      },

      '& .check p': {
        fontSize: fontSizes.large,
      }
    },

    ribbons: {
      flexBasis: '45%',

      '& .cta-btn': {
        width: '60%',
        display: 'block',
        margin: '0 auto'
      }
    }
  }
});

export default useStyles;
