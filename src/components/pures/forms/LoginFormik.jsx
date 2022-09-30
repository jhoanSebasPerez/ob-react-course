import React, { useContext, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate, useLocation } from "react-router-dom";
import { AppContext } from "../../../AppContext";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const schema = Yup.object().shape({
  username: Yup.string().min(2, "Too short").max(10, "Too long").required(),
  email: Yup.string().email("Invalid email").required(),
  password: Yup.string().required(),
});

const LoginFormik = () => {
  const navigate = useNavigate();
  const { user, sigin } = useContext(AppContext);
  const location = useLocation();

  let from = location.state?.from?.pathname || "/dashboard";

  const initialCredentials = {
    username: "",
    email: "",
    password: "",
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, user]);

  const handleSubmit = async (values) => {
    sigin(values.username, () => {
      navigate(from, { replace: true });
    });
  };

  return (
    <>
      <Formik
        initialValues={initialCredentials}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({ errors, isSubmitting, touched }) => (
          <Form>
            <label htmlFor="username">Username</label>
            <Field
              name="username"
              id="username"
              placeholder="johnDoe"
              type="text"
            />
            <ErrorMessage name="username" />

            <label htmlFor="email">Email</label>
            <Field
              name="email"
              id="email"
              placeholder="example@email.com"
              type="email"
            />
            <ErrorMessage name="email" />

            <label htmlFor="password">Password</label>
            <Field
              name="password"
              id="password"
              placeholder="your password"
              type="password"
            />
            <ErrorMessage name="password" />

            <button type="submit">Login</button>
            {isSubmitting ? <p>submiting login...</p> : null}
          </Form>
        )}
      </Formik>
      <p>
        Do not have an account? Please <Link to="/register">register</Link>
      </p>
    </>
  );
};

export default LoginFormik;
