import React from 'react';
import ComponentPage from './ComponentPage';
import componentData from '../../config/componentData';
import NavigationList from './NavigationList';
import LibraryAppBar from './LibraryAppBar';
import 'typeface-roboto'

export default class Docs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: window.location.hash.substr(1)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({route: window.location.hash.substr(1)})
    })
  }

  render() {
    const {route} = this.state;
    const component = route ? componentData.filter( component => component.name === route)[0] : componentData[0];

    return (
      <div>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
        <NavigationList components={componentData.map(component => component.name)} />
        <LibraryAppBar />
        <ComponentPage component={component} />
      </div>
    )
  }
}