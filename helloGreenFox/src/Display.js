import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  return <div>{props.count}</div>;
}

Display.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Display;
