import React from 'react';
import { InputGroup, Input } from 'reactstrap';

const nameField = ({ input, placeholder, type, meta: { touched, error } }) => {

  return (
    <InputGroup>
      <InputGroup validationstate={touched && error ? 'error' : ''}>
        <Input {...input} placeholder={placeholder} type={type} style={{ height: '1.8rem' }} />
        {/* {touched && error && <span style={{ color: 'rgb(121, 46, 46)' }}>이름을 입력해주세요!</span>} */}
      </InputGroup>
    </InputGroup>
  );
};

export default nameField;
