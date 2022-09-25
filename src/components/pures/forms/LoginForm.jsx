import React, { useState } from "react";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const [loginData, setLoginData] = useState(initialValues);

  return <div>LoginForm</div>;
};

export default LoginForm;
