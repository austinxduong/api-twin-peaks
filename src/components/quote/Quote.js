/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ fetchQuote }) => (
  <p>{fetchQuote}</p>
);

Quote.PropTypes = {
  fetchQuote: PropTypes.string.isRequired,
};

export default Quote;


