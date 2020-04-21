import React, { useState } from 'react';import { toast } from "../helpers/toast";

function useForm(initialState, validate, action) {
  const [values, setValues] = React.useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = React.useState(false);

  React.useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        action();
        setValues(initialState);
        setSubmitting(false);
      } else {
        toast(Object.values(errors).join(" "));
        setSubmitting(false);
      }
    }
    // eslint-disable-next-line
  }, [errors]);

  function handleChange(event) {
    setValues((previousValues) => ({
      ...previousValues,
      [event.target.name]: event.target.value,
    }));

  }

  function handleSubmit() {
  	const validationErrors = validate(values);
	  console.log(typeof validate);
	  console.log(validationErrors)
		setErrors(validationErrors);
		setSubmitting(true);
  }

  return {
    handleSubmit,
    handleChange,
    values,
    setValues,
    isSubmitting,
  };
}

export default useForm;