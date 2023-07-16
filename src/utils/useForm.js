import { useCallback, useState } from "react";

// hook for form control and form validation
export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setServerError("");
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (
      newValues = {},
      newErrors = {},
      newIsValid = false,
      newServerError = ""
    ) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
      setServerError(newServerError);
    },
    [setValues, setErrors, setIsValid, setServerError]
  );

  return {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    serverError,
    setServerError,
  };
}
