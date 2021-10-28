import React from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { validate } from "./utils";

export default function Register() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      const usersData = JSON.parse(localStorage.getItem("usersData")) || [];
      let IsEmailAlreayExists = false;

      usersData.map((user) => {
        if (user.email === values.email) {
          IsEmailAlreayExists = true;
        }
      });

      if (IsEmailAlreayExists) {
        toast.error("Email already exists");
      } else {
        usersData.push(values);
        localStorage.setItem("usersData", JSON.stringify(usersData));
        toast.success("Registered Successfully");
      }
    },
  });

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
        <label htmlFor="email">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
