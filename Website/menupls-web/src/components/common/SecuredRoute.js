import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { Route } from 'react-router';

import { paths } from 'src/constants';
import jwt from 'src/utils/jwt';

import PageLoader from './PageLoader';

const SecuredRoute = ({ component, ...routeProps }) => {
  let Component = PageLoader;

  if (jwt.getToken()) {
    Component = component;
  } else {
    window.location.href = paths.LOGIN;
  }

  return <Route {...routeProps} render={() => <Component />} />;
};

SecuredRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
};

export default memo(SecuredRoute);
