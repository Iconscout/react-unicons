import React from 'react';
import PropTypes from 'prop-types';

const UilShare = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M22.707,11.29321l-9-9a.99992.99992,0,0,0-1.707.707V7.04175A11.96531,11.96531,0,0,0,1.20654,21.18188a1.0002,1.0002,0,0,0,.9834.81836H2.79a.99984.99984,0,0,0,.83789-.4541A9.96021,9.96021,0,0,1,12,17.00024v4a.9999.9999,0,0,0,1.707.707l9-9A.99964.99964,0,0,0,22.707,11.29321ZM14,18.58618V16.05005a1.00012,1.00012,0,0,0-.91016-.99609c-.35986-.03223-.71923-.05372-1.08984-.05372a11.94236,11.94236,0,0,0-8.99951,4.07129C3,19.04761,3,19.02417,3,19.00024a10.01114,10.01114,0,0,1,10-10,1,1,0,0,0,1-1V5.41431l6.58594,6.58593Z'
  }));
};

UilShare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilShare.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilShare;