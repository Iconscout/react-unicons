import React from 'react';
import PropTypes from 'prop-types';

const UilTextStrikeThrough = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M15,13H9a1,1,0,0,0,0,2h2v2a1,1,0,0,0,2,0V15h2a1,1,0,0,0,0-2Zm2-7H7A1,1,0,0,0,7,8h4v2a1,1,0,0,0,2,0V8h4a1,1,0,0,0,0-2Z'
  }));
};

UilTextStrikeThrough.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilTextStrikeThrough.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilTextStrikeThrough;