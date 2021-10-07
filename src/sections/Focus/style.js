import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  focus: {
    marginTop: 33,

    '& .cta-btn': {
      width: '100%',
      margin: '28px auto'
    }
  },

  '@media screen and (min-width: 768px)': {
    focus: {
      '& .cta-btn': {
        width: '50%',
        margin: '48px auto',
        display: 'block'
      }
    }
  },

  '@media screen and (min-width: 1024px)': {
    focus: {
      '& .cta-btn': {
        width: '40%'
      }
    }
  }
});

export default useStyles;
