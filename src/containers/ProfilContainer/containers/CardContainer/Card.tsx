import React, { useEffect, useState, useContext } from 'react';

import usePdf from 'hooks/usePdf';
import { Link } from 'react-router-dom';
import ModalContainer from 'components/common/Modal/ModalContainer';
import { encodeUri } from 'utils/url';
import Paper from '@material-ui/core/Paper/Paper';
import carte from 'assets/svg/carte.svg';
import Picto from 'assets/svg/picto_ampoule_blue.svg';
import useParcourSkills from 'hooks/useParcourSkills';
import Usercontext from 'contexts/UserContext';
import { UserParcour } from 'requests/types';
import Arrow from '../../components/Arrow/Arrow';
import CardHeader from './components/CardHeader/CardHeader';
import CardIcons from './components/CardIcons/CardIcons';
import CardCompetence from './components/CardCompetence/CardCompetence';
import CardSkills from './components/CardSkills/CardSkills';

import useStyles from './styles';

interface IProps {
  Userparcours?: UserParcour | undefined;
  infoUser?: { firstName: string; lastName: string };
}

const CardContainer = ({ Userparcours, infoUser }: IProps) => {
  const classes = useStyles();
  const skillsState = useParcourSkills(undefined, Userparcours);
  const [type, setType] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingPrint, setLoadingPrint] = useState(false);
  const [element, createPdf, pdf] = usePdf();
  const [toggle, setToggle] = useState(false);
  const { user } = useContext(Usercontext);
  const openModal = () => setToggle(true);
  const closeModal = () => setToggle(false);
  const skills = skillsState.data?.skills.data || [];
  const onClickIcon = (i: string) => {
    setType(i);
    if (i === 'print') setLoadingPrint(true);
    if (i === 'download') setLoading(true);
    if (i === 'game') openModal();
    createPdf();
  };
  const icons = (
    <CardIcons
      onDownload={onClickIcon}
      onPrint={onClickIcon}
      onGame={onClickIcon}
      fetching={loading}
      fetchingPrint={loadingPrint}
      showGame={!Userparcours}
    />
  );

  useEffect(() => {
    if (pdf) {
      if (type === 'download') {
        pdf.save('competences.pdf');
        setLoading(false);
        setType('');
      } else if (type === 'print') {
        pdf.autoPrint();
        pdf.output('dataurlnewwindow');
        setLoadingPrint(false);
        setType('');
      }
    }
  }, [pdf, type]);
  const hasSportSkills = skills.filter((s) => s.theme.type === 'sport').length !== 0;
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        {!Userparcours && <Arrow />}
        <div className={classes.headerTitle}>
          <img className={classes.headerImage} src={carte} alt="" />
          <span className={classes.title}>CARTE DE COMPÉTENCES</span>
        </div>
        {!Userparcours && icons}
      </div>
      <Paper className={classes.card}>
        <CardHeader infoUser={infoUser} />
        <div className={classes.competenceContainer}>
          <CardCompetence
            title="COMPÉTENCES TRANSVERSALES"
            description="En relation avec les expériences personnelles et professionnelles"
            type="tranversale"
            userParcours={Userparcours}
          />
          {skills.filter((s) => s?.theme?.type === 'engagement').length !== 0 && (
            <CardCompetence
              title="COMPÉTENCES D’ENGAGEMENT"
              description="En relation avec les expériences d’engagement (Service civique, Service National Universel...)"
              type="engagement"
              userParcours={Userparcours}
            />
          )}
        </div>
        <CardSkills
          skills={skills.filter((skill) => skill.theme && skill.theme.type === 'personal')}
          title="Expériences personnelles"
          emptyMessage="Tu n’as pas encore renseigné d'expérience personnelle"
          emptyButton="J’ajoute une expérience perso"
          path={`/experience/theme${encodeUri({ redirect: '/profile/card' })}`}
          show={!Userparcours}
        />
        <CardSkills
          skills={skills.filter((skill) => skill.theme && skill.theme.type === 'professional')}
          title="Expériences professionnelles"
          emptyMessage="Tu n’as pas encore renseigné d'expérience professionnelle"
          emptyButton="J’ajoute une expérience pro"
          path={`/experience/theme-pro${encodeUri({ redirect: '/profile/card', type: 'professional' })}`}
          show={!Userparcours}
        />
        <CardSkills
          skills={skills.filter((skill) => skill.theme && skill.theme.type === 'engagement')}
          title="Expériences D’ENGAGEMENT"
          emptyMessage="Tu n’as pas encore renseigné d'expérience d'engagement"
          emptyButton="J’ajoute une expérience d'engagement"
          path={`/experience/theme?type=engagement${encodeUri({ redirect: '/profile/card', type: 'engagement' })}`}
          show={!Userparcours}
        />
        <CardSkills
          skills={skills.filter((skill) => skill.theme && skill.theme.type === 'sport')}
          title="Expériences sportives"
          emptyMessage="Tu n’as pas encore renseigné d'expérience sportive"
          emptyButton="J’ajoute une expérience sportive"
          path={`/experience/theme?type=sport${encodeUri({ redirect: '/profile/card', type: 'sport' })}`}
          show={!Userparcours}
        />
      </Paper>
      <div className={classes.footerIcons}>{!Userparcours && icons}</div>
      {element}
      <ModalContainer open={toggle} handleClose={closeModal} backdropColor="#011A5E" colorIcon="#D60051">
        <div className={classes.boxInfo}>
          <div className={classes.boxInfoImg}>
            <img src={Picto} alt="" />
          </div>
          <div className={classes.boxInfoDescription}>
            <p className={classes.descriptionBoxInfo}>Familiarise toi avec les</p>
            <p className={classes.descriptionBoxInfo}>compétences grâce aux modules :</p>
          </div>
          <div>
            <div>
              <Link to="/experience/gameCard">
                <p className={classes.linkBoxInfo}>Rectec</p>
              </Link>
            </div>
            <div>
              <Link to="/experience/game">
                <p className={classes.linkBoxInfo}>Rectec Engagement</p>
              </Link>
            </div>
            <div>
              <Link to="/game">
                <p className={classes.linkBoxInfo}>Burger speed</p>
              </Link>
            </div>
          </div>
        </div>
      </ModalContainer>
    </div>
  );
};

export default CardContainer;
