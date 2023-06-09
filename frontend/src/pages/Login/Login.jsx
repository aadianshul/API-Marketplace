import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./Login.module.scss";

import profileImage from "../../assets/profileImage.png";
import { fetchData } from "../../utils";
import { checkIsEmail, checkIsLength } from "../../utils";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Login = ({ toast }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!checkIsEmail(email)) {
      toast.error("Invalid email address");
      return;
    }
    if (!checkIsLength(password, 6)) {
      toast.error("Password length less than 6");
      return;
    }
    try {
      let res = await fetchData("POST", `${BACKEND_URL}/api/user/login`, {
        email,
        password,
      });
      if (res.success) {
        navigate("/");
        toast.success(res.message);
        sessionStorage.setItem("Auth Token", res.token);
      } else {
        toast.error(res.errorMessage);
      }
    } catch (err) {
      toast.error("Internal Server Error");
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("Auth Token")) {
      navigate("/");
    }
  }, []);

  return (
    <div className={styles.body}>
      <div className={styles.loginBox}>
        <div className={styles.loginForm}>
          <div className={styles.formH1}>Login to your account</div>
          <input
            className={styles.inputField}
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={styles.inputField}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className={styles.loginBtn} onClick={handleOnSubmit}>
            Login now
          </div>
          <div
            className={styles.registerLink}
            onClick={() => {
              navigate("/register");
            }}
          >
            Create a new account?
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  toast: PropTypes.func,
};

export default Login;
