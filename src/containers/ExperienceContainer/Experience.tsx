import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import NotFoundPage from 'components/layout/NotFoundPage';

import SelectionContext from 'contexts/SelectionContext';

import ExperienceComponent from './containers/Experience/Experience';
import ThemeContainer from './containers/ThemeContainer';
import SkillContainer from './containers/SkillContainer';

export const CONTAINER_PADDING = '30px 70px 90px 70px';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#223A7A' },
    secondary: { main: '#00CFFF' },
    info: { main: '#011A5E' },
    background: {
      default: '#4D6EC5',
    },
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        backgroundColor: '#fff',
        color: '#424242',
        fontFamily: 'Andika New Basic',
        fontSize: 14,
        padding: 25,
        borderRadius: 23,
        boxShadow:
          '0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)',
      },
      arrow: {
        color: '#fff',
        fontSize: 12,
      },
      popper: {
        margin: '0px 10px',
      },
    },
  },
});

const Experience = () => {
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <SelectionContext.Provider value={{ open, setOpen }}>
        <Switch>
          <Route exact path="/experience" component={ExperienceComponent} />
          <Route path="/experience/theme" exact component={ThemeContainer} />
          <Route path="/experience/skill/:themeId" component={SkillContainer} />
          <Route component={NotFoundPage} />
        </Switch>
      </SelectionContext.Provider>
    </ThemeProvider>
  );
};

export default Experience;
