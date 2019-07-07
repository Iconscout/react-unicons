import React from 'react';
import PropTypes from 'prop-types';

const UilArrowBreak = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M7,11H17a1,1,0,0,0,0-2H13V5.41l.79.8a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-2.5-2.5a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-2.5,2.5a1,1,0,0,0,1.42,1.42l.79-.8V9H7a1,1,0,0,0,0,2Zm10,2H7a1,1,0,0,0,0,2h4v3.59l-.79-.8a1,1,0,0,0-1.42,1.42l2.5,2.5a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l2.5-2.5a1,1,0,0,0-1.42-1.42l-.79.8V15h4a1,1,0,0,0,0-2Z'
  }));
};

UilArrowBreak.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilArrowBreak.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilArrowBreak;