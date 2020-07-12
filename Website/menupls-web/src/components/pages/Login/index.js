import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { Form, Input } from '../../common';
import validationSchema from './validationSchema';

import './index.scss';

const Login = ({ login, isLoading }) => {
  const history = useHistory();

  const redirect = useCallback(
    (path) => {
      history.push(path);
    },
    [history]
  );

  const loginUser = (data) => {};

  return (
    <div className="login-form-container">
      <Form
        submitBtnLabel="Login"
        onSubmit={loginUser}
        validationSchema={validationSchema}
        formClassName="login-page__form-container__form"
      >
        <Input name="email" label="Email" />
        <Input type="password" name="password" label="Password" />
      </Form>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default memo(Login);
