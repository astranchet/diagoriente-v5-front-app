import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles<Theme, { direction: 'vertical' | 'horizontal' }>((theme) => ({
  root: {
    display: 'flex',
    flexDirection: (props) => (props.direction === 'horizontal' ? 'row' : 'column'),
    alignItems: 'center',
    justifyContent: 'center',
    margin: '5px 8px 5px 0px',
    [theme.breakpoints.down('sm')]: {
      margin: '5px 12px 5px 0px',
    },
    cursor: 'pointer',
  },
  circle: {
    width: 77,
    height: 77,
    borderRadius: '50%',
    border: (props) => (props.direction !== 'horizontal' ? `4px solid ${theme.palette.primary.main}` : ''),
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  number: {
    fontWeight: 900,
    fontSize: 42,
    lineHeight: '42px',
    fontFamily: 'ocean',
    color: theme.palette.primary.main,
    paddingTop: 8,
  },
  text: {
    fontWeight: 'bold',
    lineHeight: 15
  },

  elements: {
    display: 'flex',
    flexDirection: 'column',
    width: 90,
    marginLeft: 13,
    fontSize: 12,
    color: (props) => (props.direction === 'horizontal' ? '#fff' : '#424242'),
    textAlign: (props) => (props.direction === 'horizontal' ? 'left' : 'center'),
  },
}));
