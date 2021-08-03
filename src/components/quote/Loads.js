/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ button }) => (
  <button onClick={button}> Beep </button>
);

Button.PropTypes = {
  button: PropTypes.func,
};

export default Button;
