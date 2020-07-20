import axios from 'axios';
import React, { memo, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Form, Input } from '../../common';
import { paths } from '../../../constants';
import jwt from '../../../utils/jwt';

import validationSchema from './validationSchema';
import './index.scss';

const Login = () => {
  const history = useHistory();

  const redirect = useCallback(
    (path) => {
      history.push(path);
    },
    [history]
  );

  const loginUser = (data) => {
    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/api/admin/login`, data)
      .then((res) => {
        jwt.setToken(res.data.token);

        redirect(paths.ADMIN);
      })
      .catch((error) => {
        // eslint-disable-next-line no-alert
        window.alert(error);
      });
  };

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

export default memo(Login);
