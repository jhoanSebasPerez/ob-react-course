import React, { useState } from "react";

const RegisterForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const [registerData, setRegisterData] = useState(initialValues);

  return <div>RegisterForm</div>;
};

export default RegisterForm;
