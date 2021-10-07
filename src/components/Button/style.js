import { makeStyles } from '@mui/styles';
import { colors, fontSizes } from 'theme.js';

const useStyles = makeStyles({
  btn: {
    background: colors.primary,
    color: colors.white,
    borderRadius: 8,
    border: 'none',
    paddingTop: 17,
    paddingBottom: 17,
    fontSize: fontSizes.medium,
    cursor: 'pointer',

    '&:hover': {
      background: colors.primaryDark
    }
  }
});

export default useStyles;
