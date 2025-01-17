import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';

import './index.scss';

function FileInput({ onDrop, placeholder, multiple }) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple,
  });

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="file-input-container">
      <div {...getRootProps({ className: 'file-input-container__dropzone' })}>
        <input {...getInputProps()} />
        <p>{placeholder}</p>
      </div>
      <aside>
        <h4>{multiple ? 'Files' : 'File'}</h4>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}

FileInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onDrop: PropTypes.func.isRequired,
  multiple: PropTypes.bool,
};

FileInput.defaultProps = {
  multiple: false,
};

export default memo(FileInput);
