import React from 'react';
import PropTypes from 'prop-types';

const UilWebGrid = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM14,20H4V13H14Zm0-9H4V4H14Zm6,9H16V4h4Z'
  }));
};

UilWebGrid.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilWebGrid.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilWebGrid;