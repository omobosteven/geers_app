import { makeStyles } from '@mui/styles';
import { fontSizes } from 'theme.js';

const useStyles = makeStyles({
  wrapper: {
    '& .image-wrapper': {
      width: '100%',

      '& img': {
        width: '100%',
        height: 'auto'
      }
    },

    '& .rate': {
      fontSize: fontSizes.large,
      fontWeight: 'bold',
      marginTop: 5,
      marginBottom: 0
    }
  }
});

export default useStyles;
