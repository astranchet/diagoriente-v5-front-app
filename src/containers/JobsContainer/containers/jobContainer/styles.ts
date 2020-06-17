import { makeStyles, Theme } from '@material-ui/core/styles';
import Bandeau from 'assets/svg/bandeau.svg';

export default makeStyles<Theme>((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  bandeau: {
    width: '100%',
    height: 162,
    backgroundImage: `url(${Bandeau})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentInfo: {
    maxWidth: '1080px',
    width: '100%',
    marginTop: 30,
    padding: 4,
  },
  headerInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 25,
    width: '100%',
  },
  back: { display: 'flex', alignItems: 'center', cursor: 'pointer' },
  arrow: {
    transform: 'rotate(180deg)',
  },
  textBack: {
    color: '#6B6B6A',
    fontWeight: 'bold',
    marginLeft: 13,
  },
  favoris: { display: 'flex', alignItems: 'flex-end', cursor: 'pointer' },
  textFavoris: {
    textDecorationLine: 'underline',
    color: '#011A5E',
    fontWeight: 'bold',
    marginLeft: 13,
  },
  JobInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 60,
    padding: 4,
  },
  jobDescription: {
    maxWidth: 500,
    display: 'flex',
    flexDirection: 'column',
  },
  titleDescription: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 20,
  },
  footerDescription: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 19,
  },
  testContainer: {
    display: 'flex',
  },
  testLogo: {
    paddingRight: 17,
  },
  textTest: {
    color: '#011A5E',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: 14,
    cursor: 'pointer',
  },
  immersion: {
    width: 285,
    height: 243,
    background: theme.palette.secondary.main,
    borderRadius: 15,
    position: 'relative',
    padding: 30,
    textAlign: 'center',
    marginTop: 45,
  },
  logoContainer: {
    position: 'absolute',
    top: -18,
    left: 120,
  },
  titleImersion: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  btnImersionContainer: { position: 'absolute', bottom: -19, left: 86 },
  btnImersion: {
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  btnLabel: { color: '#011A5E', fontWeight: 'bold' },
  interestInfo: {
    backgroundColor: '#F3F2F4',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  wrapInterest: {
    maxWidth: '1080px',
    width: '100%',
    padding: '0px 4px',
  },
  interestTitleContainer: {
    display: 'flex',
    alignItems: 'baseline',
    marginTop: 30,
  },
  interestTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    marginRight: 20,
  },
  interestContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  interests: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '70%',
    marginTop: 30,
  },
  infoInterstDescription: {
    display: 'flex',
    width: 230,
    margin: 10,
  },
  gifInterest: {
    width: 77,
    height: 77,
    backgroundColor: '#C4C4C4',
    borderRadius: '50%',
  },
  titleInterest: {
    width: '56%',
    overflow: 'hidden',
    whiteSpace: 'pre-wrap',
    paddingLeft: 10,
  },
  infoInterst: {
    width: 285,
    height: 200,
    position: 'relative',
    backgroundColor: 'white',
    borderRadius: '15px 15px 0px 0px',
    alignSelf: 'flex-end',
    padding: '30px 20px',
  },
  infoInterestPurpleText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#420FAB',
  },
  logo: {
    position: 'absolute',
    top: -40,
    right: 105,
  },
  competenceInfo: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  competenceContainer: {
    width: '100%',
    maxWidth: 1080,
    padding: 4,
  },
}));
