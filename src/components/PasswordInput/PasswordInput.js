import React from 'react';
import PropTypes from 'prop-types';
import Label from '../Label';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

/** Password input with integrated label to enforce consistency in layout, error display, label placement, and required field marker. 
 * Provides icon to show and hide characters.
*/
class PasswordInput extends React.Component {
  state = {
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    return (
      <div style={{marginBottom: 16}}>
        <Label htmlFor="password-input"label="Password" required={this.props.required} />
        <Input
          id={this.props.htmlId}
          type={this.state.showPassword ? 'text' : 'password'}
          value={this.props.value}
          onChange={this.handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="Toggle password visibility"
                onClick={this.handleClickShowPassword}
              >
                {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          style={this.props.error && {border: 'solid 1px red'}}
          {...this.props}/>
          {this.props.children}
        <small>{this.props.error && <div className="error" style={{color: 'red'}}>{this.props.error}</div>}</small>
      </div>
    );
  }
};

PasswordInput.propTypes = {
  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */
  htmlId: PropTypes.string.isRequired,

  /** Input name. Recommend setting this to match object's property so a single change handler can be used. */
  name: PropTypes.string.isRequired,

  /** Input label */
  label: PropTypes.string.isRequired,

  /** Input type */
  type: PropTypes.oneOf(['text', 'number', 'password']),

  /** Mark label with asterisk if set to true */
  required: PropTypes.bool,

  /** Function to call onChange */
  onChange: PropTypes.func.isRequired,

  /** Placeholder to display when empty */
  placeholder: PropTypes.string,

  /** Value */
  value: PropTypes.any,

  /** String to display when error occurs */
  error: PropTypes.string,

  /** Child component to display next to the input */
  children: PropTypes.node
};

export default PasswordInput;