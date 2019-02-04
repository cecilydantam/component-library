import React from 'react';
import Login from 'component-library/Login';

export default class LoginExample extends React.Component {
  onSubmit = (user) => {
    console.log(user);
  }

  render() {
    return <Login onSubmit={this.onSubmit} />
  }
}