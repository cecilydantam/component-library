import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  }
};

function LibraryAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className="topBar">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Component Library <small>v1.0</small>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

LibraryAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LibraryAppBar);