import React from 'react';
import PropTypes from 'prop-types';

const Field = ({
  type,
  placeholder,
  reducerName,
  name,
  value,
  changeField,
  cssClass,
  id,
}) => {
  let field;

  const inputChangeHandler = (event) => {
    changeField({name, value:event.target.value, reducerName});
  };

  switch (type) {
    case 'textarea':
      field = (
        <textarea
          id={id}
          className={cssClass}
          placeholder={placeholder}
          name={name}
          value={value}
          // maxLength={}
          onChange={inputChangeHandler}></textarea>
      );
      break;
    case 'password':
      field = (
        <input
          id={id}
          className={cssClass}
          type="password"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={inputChangeHandler}
        />
      );
      break;
    case 'email':
      field = (
        <input
          id={id}
          className={cssClass}
          type="email"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={inputChangeHandler}
        />
      );
      break;
    case 'date':
      field = (
        <input
          id={id}
          className={cssClass}
          type="date"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={inputChangeHandler}
        />
      );
      break;
    default:
      field = (
        <input
          id={id}
          type="text"
          className={cssClass}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={inputChangeHandler}
        />
      );
  }

  return <>{field}</>;
};

Field.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  reducerName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.bool]).isRequired,
  changeField: PropTypes.func.isRequired,
  cssClass: PropTypes.string,
  id: PropTypes.string,
};

Field.defaultProps = {
  type: 'text',
  placeholder: '',
  cssClass: '',
  id: '',
};

export default Field;