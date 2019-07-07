import React from 'react';
import PropTypes from 'prop-types';

const UilRepeat = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M5.5,17.5H4V6.5h7.8L11,7.29a1,1,0,0,0,1.41,1.42l2.5-2.5a1,1,0,0,0,0-1.42l-2.5-2.5a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l.79.79H3a1,1,0,0,0-1,1v13a1,1,0,0,0,1,1H5.5a1,1,0,0,0,0-2ZM21,4.5H18.5a1,1,0,0,0,0,2H20v11H11.63l.79-.79a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0l-2.5,2.5a1,1,0,0,0,0,1.42l2.5,2.5a1,1,0,0,0,1.41-1.42l-.79-.79H21a1,1,0,0,0,1-1V5.5A1,1,0,0,0,21,4.5Z'
  }));
};

UilRepeat.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilRepeat.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilRepeat;