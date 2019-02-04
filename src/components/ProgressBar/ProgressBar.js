import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class ProgressBar extends React.Component {
  render() {
    return (
      <div className="progressBar">
        <LinearProgress variant="determinate" value={this.props.percent} />
      </div>
    );
  }
}

ProgressBar.propTypes = {
  /** Percent of progress completed */
  percent: PropTypes.number.isRequired,
};

ProgressBar.defaultProps = {
  percent: 0
};

export default withStyles(styles)(ProgressBar);