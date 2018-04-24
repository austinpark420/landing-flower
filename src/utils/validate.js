const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'required';
  }
  if (!values.email) {
    errors.email = 'required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.mobile) {
    errors.mobile = 'required';
  }
  if (!values.recipient) {
    errors.recipient = 'required';
  }
  if (!values.recipientMobile) {
    errors.recipientMobile = 'required';
  }
  if (!values.recipientAddress) {
    errors.recipientAddress = 'required';
  }
  if (!values.message) {
    errors.message = 'required';
  }
  return errors;
};

export default validate;
