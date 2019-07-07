import React from 'react';
import PropTypes from 'prop-types';

const UilChartLine = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M7,16a1.5,1.5,0,0,0,1.5-1.5.77.77,0,0,0,0-.15l2.79-2.79.23,0,.23,0,1.61,1.61s0,.05,0,.08a1.5,1.5,0,1,0,3,0v-.08L20,9.5h0A1.5,1.5,0,1,0,18.5,8a.77.77,0,0,0,0,.15l-3.61,3.61h-.16L13,10a1.49,1.49,0,0,0-3,0L7,13H7a1.5,1.5,0,0,0,0,3Zm13.5,4H3.5V3a1,1,0,0,0-2,0V21a1,1,0,0,0,1,1h18a1,1,0,0,0,0-2Z'
  }));
};

UilChartLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilChartLine.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilChartLine;