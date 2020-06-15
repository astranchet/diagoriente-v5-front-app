import React from 'react';
import { Switch } from 'react-router-dom';
import Route from 'components/ui/Route/Route';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import NotFoundPage from 'components/layout/NotFoundPage';
import JobsContainer from './containers/jobsContainer';
import JobContainer from './containers/jobContainer';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#FFA600' },
    secondary: { main: '#FFD382' },
    background: {
      default: '#FFA600',
    },
    success: { main: '#DB8F00' },
    info: { main: '#DDCCFF' },
  },
});
const Jobs = () => (
  <ThemeProvider theme={theme}>
    <Switch>
      <Route protected exact path="/jobs" component={JobsContainer} />
      <Route protected path="/:id" component={JobContainer} />
      <Route component={NotFoundPage} />
    </Switch>
  </ThemeProvider>
);

export default Jobs;
