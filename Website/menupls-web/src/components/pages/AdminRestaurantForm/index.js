import axios from 'axios';
import React, { useCallback, useRef, useState } from 'react';

import { Input, Form, FileInput, Loading } from '../../common';

import validationSchema from './validationSchema';

import './index.scss';

const AdminRestaurantForm = () => {
  const formRef = useRef();

  const [restaurantImage, setRestaurantImage] = useState();
  const [menuImages, setMenuImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleOnDropRestaurantImage = useCallback((files) => {
    setRestaurantImage(files[0]);
  }, []);

  const handleOnDropMenuImages = useCallback(setMenuImages, [setMenuImages]);

  const onSubmit = (data) => {
    setLoading(true);

    const formData = new FormData();
    formData.append('label', data.label);
    formData.append('location', data.location);
    formData.append('restaurantImage', restaurantImage);
    formData.append('menuImages', menuImages);

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
        // eslint-disable-next-line no-alert
        window.alert('Successfully created!');
      })
      .catch((error) => {
        // eslint-disable-next-line no-alert
        window.alert(error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      {loading && <Loading />}
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
            placeholder="Drag and drop or click here to add restaurant image"
            onDrop={handleOnDropRestaurantImage}
          />
          <FileInput
            multiple
            placeholder="Drag and drop or click here to add restaurant menu images"
            onDrop={handleOnDropMenuImages}
          />
        </Form>
      </div>
    </>
  );
};

export default AdminRestaurantForm;
