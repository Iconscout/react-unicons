import React from 'react';
import PropTypes from 'prop-types';

const UilPagerduty = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M17,3c-1.6-0.8-2.7-1-5.2-1H6v12.1h5.8c2.3,0,4-0.1,5.5-1.1c1.6-1.1,2.6-3,2.5-5C19.9,5.9,18.8,4,17,3z M12.4,11.6H8.9v-7l3.3,0c3,0,4.5,1,4.5,3.4C16.8,10.6,14.9,11.6,12.4,11.6z M6,22h2.9v-5.3H6V22z'
  }));
};

UilPagerduty.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilPagerduty.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilPagerduty;