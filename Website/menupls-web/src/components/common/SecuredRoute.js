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
  authenticateUser: PropTypes.func.isRequired,
  component: PropTypes.node.isRequired,
  hasLoaded: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default memo(SecuredRoute);
