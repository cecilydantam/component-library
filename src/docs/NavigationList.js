import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const NavigationList = ({components}) => {
    console.log(components);
  return (
    <div className="navigation">
      <List>
      {
        components.map( name => {
            return (
                <ListItemLink href={`#${name}`}>
                    <ListItemText primary={name} />
                </ListItemLink>
            )
        })
      }
      </List>
    </div>
  );
}

NavigationList.propTypes = {
  components: PropTypes.array.isRequired
};

export default withStyles(styles)(NavigationList);
