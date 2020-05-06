import React, { useContext } from 'react';

import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import { links } from 'components/layout/PublicHeader/PublicHeader';
import { Link } from 'react-router-dom';
import Select from 'components/inputs/Select/Select';
import beta from 'assets/images/marianne.png';
import betaGouv from 'assets/images/beta_gov.png';
import DrawerContext from 'contexts/DrawerContext';
import logo from 'assets/svg/diagoriente_logo.svg';

import useStyles from './styles';

const Sidebar = () => {
  const classes = useStyles();
  const { open, setOpen } = useContext(DrawerContext);

  const onClose = () => {
    setOpen(false);
  };

  const drawer = (
    <>
      <img src={logo} alt="diagoriente_logo" height={66} />
      <List className={classes.root}>
        {links.map((e) => (
          <li className={classes.linkContainer}>
            <Link className={classes.link} to={e.path}>
              {e.text}
            </Link>
          </li>
        ))}

        <Select />
        <div className={classes.imageWrapper}>
          <div className={classes.square}>
            <img src={beta} alt="menu" width={80} />
          </div>
          <img src={betaGouv} alt="menu" width={100} className={classes.betaGov} />
        </div>
      </List>
    </>
  );
  return (
    <nav aria-label="mailbox folders" className={classes.drawerPaper}>
      <Hidden xsDown implementation="css">
        <Drawer
          variant="temporary"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
            root: classes.root,
          }}
          ModalProps={{
            keepMounted: true,
          }}
          onClose={onClose}
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};
export default Sidebar;
