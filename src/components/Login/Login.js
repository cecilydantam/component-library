import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../TextInput';
import PasswordInput from '../PasswordInput';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider'

/** Registration form with built-in validation. */
class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: '',
        password: ''
      },
      errors: {},
      submitted: false,
    };
  }

  onChange = (event) => {
    const user = this.state.user;
    user[event.target.name] = event.target.value;
    this.setState({user});
  }

  validate({email, password}) {
    const errors = {};

    if (!email) errors.email = 'Email required.';
    if (!password) errors.password = `Password required.`;

    this.setState({errors});
    const formIsValid = Object.getOwnPropertyNames(errors).length === 0;
    return formIsValid;
  }

  onSubmit = () => {
    const {user} = this.state;
    const formIsValid = this.validate(user);
    if (formIsValid) {
      this.props.onSubmit(user);
      this.setState({submitted: true});
    }
  }

  render() {
    const {errors} = this.state;
    const {email, password} = this.state.user;

    return (
      <div class="login-component">
        <div class="login-container">
            <h1>Welcome to Our System</h1>
            <p>Access to this system is only allowed for authorized users. 
                Our login process better protects the privacy and security of your personal information. 
                Please note, your username and password is <strong>case sensitive</strong>.</p>
            
            <div class="email-container">
                <TextInput
                    htmlId="login-form-email"
                    name="email"
                    onChange={this.onChange}
                    label="Email"
                    value={email}
                    error={errors.email}
                    required />
            </div>

            <div class="password-container">
                <PasswordInput
                    htmlId="login-form-password"
                    label="Password"
                    name="password"
                    value={password}
                    onChange={() => {}} />
            </div>
            
            <div class="submit-container">
                <Button variant="contained" className="login" onClick={this.onSubmit}>Login</Button>

                <Button variant="outlined" className="forgot-password">Forgot Your Password?</Button>
            </div>

            <Divider />

            <div class="register-container">
                <p>Don't have an account?</p>
                <div class="register-button-container">
                    <Button variant="contained" className="register" onClick={this.onSubmit}>Register</Button>
                </div>
            </div>
        </div>
        <div class="browser-requirements">
        <p>
            <strong>Browser Requirements</strong>
            This website is designed using new technology and best practices in web standards.  
            If you are using an older browser, we recommend you upgrade your browser to properly view our website.  
            This website is optimized for the following browsers:
        </p>
        <ul>
            <li>Microsoft Internet Explorer 8 or greater, version 11 is preferred</li>
            <li>Mozilla Firefox 4.0 or greater</li>
            <li>Google Chrome</li>
        </ul>
      </div>
    </div>
    )
  }
}

RegistrationForm.propTypes = {
  /** Called when form is submitted */
  onSubmit: PropTypes.func.isRequired,
}

RegistrationForm.defaultProps = {
};

export default RegistrationForm;