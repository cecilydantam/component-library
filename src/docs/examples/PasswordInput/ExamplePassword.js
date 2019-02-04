import React from 'react';
import PasswordInput from 'component-library/PasswordInput';

/** Password */
export default class ExamplePassword extends React.Component {
  render() {
    return (
      <PasswordInput
        htmlId="example-password"
        label="Password"
        name="password"
        onChange={() => {}}
       />
    )
  }
}