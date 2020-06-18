// write your custom hook here to control your checkout form
import { useState } from 'react';

// * custom hook should handle all the stateful logic

const useForm = () => {
  const [values, setValues] = useState({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChanges = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  return {
    values,
    handleChanges,
    handleSubmit,
    showSuccessMessage
  };
};

export default useForm;
