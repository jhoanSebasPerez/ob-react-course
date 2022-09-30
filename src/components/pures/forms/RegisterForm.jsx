import React from "react";
import User from "../../../models/User.class";
import ROLES from "../../../models/Rol.enum";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const registerSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Username too short")
    .max(15, "Username too long")
    .required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(4, "Password too short").required(),
  confirm: Yup.string()
    .when("password", {
      is: (value) => (value && value.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref("password")], "Password must be match"),
    })
    .required(),
  rol: Yup.string().oneOf(
    Object.keys(ROLES).map((key) => ROLES[key]),
    "Rol not found"
  ),
});

const RegisterForm = () => {
  const registerValues = {
    username: "",
    email: "",
    password: "",
    confirm: "",
    rol: ROLES.USER,
  };

  const handleSubmit = async (values) => {
    await new Promise((r) => setTimeout(r, 1000));
    const { username, email, password, rol } = values;
    const newUser = new User(username, email, password, rol);
    console.log(newUser);
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <>
      <Formik
        initialValues={registerValues}
        onSubmit={handleSubmit}
        validationSchema={registerSchema}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <label htmlFor="username">Username:</label>
            <Field
              id="username"
              name="username"
              type="text"
              placeholder="JohnDoe"
            />
            {errors.username && touched.username && (
              <ErrorMessage name="username" />
            )}

            <label htmlFor="email">Email:</label>
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
            />
            {errors.email && touched.email && <ErrorMessage name="email" />}

            <label htmlFor="password">Password:</label>
            <Field
              id="password"
              name="password"
              type="password"
              placeholder="password"
            />
            {errors.password && touched.password && (
              <ErrorMessage name="password" />
            )}

            <label htmlFor="confirm">Confirm password:</label>
            <Field
              id="confirm"
              name="confirm"
              type="password"
              placeholder="confirm password"
            />
            {errors.confirm && touched.confirm && (
              <ErrorMessage name="confirm" />
            )}

            <button type="submit">Sign up</button>
            {isSubmitting ? <p>Sending your credentials...</p> : null}
          </Form>
        )}
      </Formik>
      <p>
        Have an account? Please <Link to="/login">Login</Link>
      </p>
    </>
  );
};

export default RegisterForm;
