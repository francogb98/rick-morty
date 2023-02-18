import React from "react";

export default function Validations({ username, password, verificUsername }) {
  const validateUsername = () => {
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!username || username.length > 35) {
      return false;
    }
    // return emailRegex.test(username);
    return emailRegex.test(username);
  };

  const validatePassword = () => {
    if (!password || password.length < 6 || password.length > 10) {
      return false;
    }
    return /\d/.test(password);
  };

  return (
    <>
      {/* {verific(validatePassword())} */}
      {() => verificUsername(validateUsername())}
    </>
  );
}
