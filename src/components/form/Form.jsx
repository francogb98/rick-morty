import React, { useState } from "react";
import Validations from "./validations";
import style from "./Form.module.css";

export default function Form(props) {
  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
  });

  const [Errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    props.login(userData);
  };

  const verificUsername = (info) => {
    (info = true)
      ? setErrors({ ...Errors, username: true })
      : setErrors({ ...Errors, username: false });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={style.body}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
        />

        <button
          type="submit"
          onClick={verificUsername}
          className={style.button}
        >
          Login
        </button>

        <Validations
          username={userData.username}
          password={userData.password}
          verificUsername={verificUsername}
        />
      </form>
    </>
  );
}
