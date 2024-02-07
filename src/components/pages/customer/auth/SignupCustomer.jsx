import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { customerSignup } from "../../../../features/customer/customerSlice";
import LoginCss from "./Login.module.css";

const SignupCustomer = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();
  let dispatch = useDispatch();

  const register = () => {
    const data = {
      firstName,
      lastName,
      phone,
      email,
      password,
    };
    dispatch(customerSignup(data));
  };

  const login = () => {
    navigate("/login");
  };

  return (
    <div className={LoginCss.auth_center}>
      <div className={LoginCss.login_form}>
        <h2>Signup</h2>
        <div className={LoginCss.input_fields}>
          <input
            type="text"
            placeholder="first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            placeholder="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button onClick={register}>Sign up</button>
        </div>
        <div>
          Already have an account{" "}
          <span className={LoginCss.link} onClick={() => login()}>
            Login
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignupCustomer;
