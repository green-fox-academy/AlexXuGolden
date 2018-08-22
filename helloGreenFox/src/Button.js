import React from 'react';
import PropTypes from 'prop-types';

const Button = props => (<button type="button" onClick={props.func}>{props.name}</button>);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

export default Button;
