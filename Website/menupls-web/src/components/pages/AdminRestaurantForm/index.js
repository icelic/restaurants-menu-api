import axios from 'axios';
import React, { useCallback, useRef, useState } from 'react';

import { Input, Form, FileInput } from '../../common';

import validationSchema from './validationSchema';

import './index.scss';

const AdminRestaurantForm = () => {
  const formRef = useRef();

  const [restaurantImage, setRestaurantImage] = useState();

  const handleOnDrop = useCallback((files) => {
    setRestaurantImage(files[0]);
  }, []);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('label', data.label);
    formData.append('location', data.location);
    formData.append('image', restaurantImage);

    axios
      .post(
        `${process.env.REACT_APP_API_BASE_URL}/api/admin/restaurants`,
        formData,
        {
          headers: {
            'content-type': 'multipart/form-data',
          },
        }
      )
      .then(() => {
        formRef.current.reset();
      })
      .catch((error) => {
        // eslint-disable-next-line no-alert
        window.alert(error);
      });
  };

  return (
    <div className="restaurant-form-container">
      <Form
        formRef={formRef}
        onSubmit={onSubmit}
        submitBtnLabel="Save"
        validationSchema={validationSchema}
      >
        <Input name="label" label="Name" />
        <Input name="location" label="Location (lat,lng)" />
        <FileInput
          label="Drag and drop or click here to select restaurant image"
          onDrop={handleOnDrop}
        />
      </Form>
    </div>
  );
};

export default AdminRestaurantForm;
