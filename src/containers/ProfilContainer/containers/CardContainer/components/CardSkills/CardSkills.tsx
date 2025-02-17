import React from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid/Grid';
import Button from '@material-ui/core/Button/Button';

import { SkillType } from 'requests/types';
import CardPart from '../CardPart/CardPart';
import CardSkill from '../CardSkill/CardSkill';
import useStyles from './styles';

interface CardSkillsProps {
  title: string;
  emptyMessage: string;
  emptyButton: string;
  path: string;
  showBtn?: boolean;
  skills: SkillType[];
  show?: boolean
}

const CardSkills = ({ title, path, emptyButton, emptyMessage, showBtn, show, skills }: CardSkillsProps) => {
  const classes = useStyles();
  return (
    <CardPart title={title}>
      {skills.length ? (
        <>
          <div>
            <Grid className={classes.skillsContainer} container spacing={3}>
              {skills.map((skill) => (
                <CardSkill key={skill.id} {...skill} />
              ))}
            </Grid>
          </div>
          {show && <Link to={path}>
            <Button className={classes.emptyButton} variant="contained">
              {emptyButton}
            </Button>
          </Link>}
        </>
      ) : (
          <>
            <div className={classes.emptyMessage}>{emptyMessage}</div>
            {show && !showBtn && (
              <Link to={path}>
                <Button className={classes.emptyButton} variant="contained">
                  {emptyButton}
                </Button>
              </Link>
            )}
          </>
        )}
    </CardPart>
  );
};

export default CardSkills;
