export function validate(values) {
  const errors = {};

  // validate email field
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Please enter a valid email";
  }

  // validate password field
  if (!values.password) {
    errors.password = "Password is required";
  }
  return errors;
}
