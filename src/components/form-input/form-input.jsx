import React from 'react';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div>
       <label for="exampleInputName" className="form-label">{label}</label>
    <input className='form-control' onChange={handleChange} {...otherProps} />
    
  </div>
);

export default FormInput;