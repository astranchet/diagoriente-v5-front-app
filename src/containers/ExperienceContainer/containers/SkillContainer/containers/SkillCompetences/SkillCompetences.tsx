import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';

import { Link, RouteComponentProps } from 'react-router-dom';
import { useCompetence } from 'requests/competences';
import { Competence } from 'requests/types';

import TitleImage from 'components/common/TitleImage/TitleImage';
import Title from 'components/common/Title/Title';
import RestLogo from 'components/common/Rest/Rest';
import Grid from '@material-ui/core/Grid';
import Button from 'components/button/Button';
import Child from 'components/ui/ForwardRefChild/ForwardRefChild';

import classNames from 'utils/classNames';

import blueline from 'assets/svg/blueline.svg';
import Arrow from 'assets/svg/arrow';
import arrowleft from 'assets/svg/arrowLeft.svg';

import useStyles from './styles';

interface Props extends RouteComponentProps<{ themeId: string }> {
  competences: Competence[];
  setCompetences: (Competences: Competence[]) => void;
}

const ExperienceCompetence = ({ match, competences, setCompetences }: Props) => {
  const classes = useStyles();

  const { data, loading } = useCompetence();

  const addCompetence = (competence: Competence) => {
    setCompetences([...competences, competence]);
  };

  const deleteCompetence = (id: string) => {
    setCompetences(competences.filter((comp) => comp.id !== id));
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.header}>
          <Title title="MES EXPERIENCES PERSONNELLES" color="#223A7A" size={26} />
          <RestLogo color="#4D6EC5" label="Annuler" />
        </div>
        <div className={classes.themeContainer}>
          <TitleImage title="3" image={blueline} color="#223A7A" height="80px" />
          <p className={classes.title}>
            En rapport avec ces activités, quelles sont
            <br />
            <strong>les compétences </strong>
            que tu mets en oeuvre ?
            <br />
            <small>(4 choix maximum) </small>
          </p>
          <Grid className={classes.circleContainer} container spacing={3}>
            {loading && <div className={classes.loadingContainer}>...loading</div>}

            {data?.competences.data.map((comp) => {
              const selected = competences.find((e) => e.id === comp.id);

              return (
                <Grid key={comp.id} item xs={12} md={6}>
                  <Tooltip
                    title={comp.niveau.map((e, index) => (
                      <Child key={index}>{e.title}</Child>
                    ))}
                    arrow
                    placement="left"
                  >
                    <Button
                      childrenClassName={classes.margin}
                      className={classNames(classes.competences, selected && classes.selectedCompetence)}
                      onClick={() => (!selected ? addCompetence(comp) : deleteCompetence(comp.id))}
                    >
                      {comp.title}
                    </Button>
                  </Tooltip>
                </Grid>
              );
            })}
          </Grid>
          <Link to={`/experience/skill/${match.params.themeId}/competencesValues`} className={classes.hideLine}>
            <Button disabled={!competences.length} className={classes.btnperso} type="submit">
              <div className={classes.contentBtn}>
                <div className={classes.btnLabel}>Suivant</div>
                <Arrow color="#223A7A" width="12" height="12" />
              </div>
            </Button>
          </Link>
        </div>

        <Link to={`/experience/skill/${match.params.themeId}/activities`} className={classes.btnpreced}>
          <img src={arrowleft} alt="arrow" className={classes.arrowpreced} />
          Precedent
        </Link>
      </div>
    </div>
  );
};
export default ExperienceCompetence;
