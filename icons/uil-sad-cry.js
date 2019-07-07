import React from 'react';
import PropTypes from 'prop-types';

const UilSadCry = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M12,2A10,10,0,0,0,8.59,21.39l.06,0a9.81,9.81,0,0,0,6.7,0l.06,0A10,10,0,0,0,12,2Zm2,17.74a7.82,7.82,0,0,1-4,0V16h4Zm2-.82V11a1,1,0,0,0,0-2H14a1,1,0,0,0,0,2v3H10V11a1,1,0,0,0,0-2H8a1,1,0,0,0,0,2v7.92a8,8,0,1,1,8,0Z'
  }));
};

UilSadCry.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilSadCry.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilSadCry;