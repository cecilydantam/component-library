import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';

/** Label with required field display, htmlFor, and block styling */
function Label({htmlFor, label, required}) {
  return (
    <InputLabel style={{display: 'block'}} htmlFor={htmlFor}>
      {label} { required && <span style={{color: 'red'}}> *</span> }
    </InputLabel>
  )
}

Label.propTypes = {
  /** HTML ID for associated input */
  htmlFor: PropTypes.string.isRequired,

  /** Label text */
  label: PropTypes.string.isRequired,

  /** Display asterisk after label if true */
  required: PropTypes.bool
};

export default Label;