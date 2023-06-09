import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./Contactus.module.scss";
import { fetchData } from "../../utils";
import { checkIsLength, checkIsURL } from "../../utils";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const isDataSame = (apiData, apiName, apiEndpoint, apiDescription) => {
  if (apiName !== apiData.apiName) {
    return false;
  }
  if (apiEndpoint !== apiData.apiEndpoint) {
    return false;
  }
  if (apiDescription !== apiData.apiDescription) {
    return false;
  }
  return true;
};

const Contactus = ({ toast }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [apiName, setApiName] = useState("");
  const [apiEndpoint, setApiEndpoint] = useState("");
  const [apiDescription, setApiDescription] = useState("");
  const [apiId, setApiId] = useState("");

  const handleOnEdit = async (e) => {
    e.preventDefault();
    let authToken = sessionStorage.getItem("Auth Token");
    const checkData = isDataSame(
      location.state,
      apiName,
      apiEndpoint,
      apiDescription,
    );
    if (checkData === true) {
      navigate("/apis");
      toast.success("API Details Updated Successfully");
    } else {
      if (!checkIsLength(apiName, 1)) {
        toast.error("Error! API Name cannot be empty");
        return;
      }
      if (!checkIsURL(apiEndpoint)) {
        toast.error("Invalid API URL Endpoint");
        return;
      }
      if (!checkIsLength(apiDescription, 1)) {
        toast.error("Error! API Description cannot be empty");
        return;
      }
      try {
        let res = await fetchData(
          "PATCH",
          `${BACKEND_URL}/api/apis/${apiId}`,
          {
            name: apiName,
            endpoint: apiEndpoint,
            description: apiDescription,
          },
          authToken,
        );
        if (res.success) {
          toast.success(res.message);
          navigate("/apis");
        } else {
          toast.error(res.errorMessage);
        }
      } catch (err) {
        toast.error("Internal Server Error");
      }
    }
    return;
  };

  const handleOnDelete = async (e) => {
    e.preventDefault();
    let authToken = sessionStorage.getItem("Auth Token");
    if (authToken) {
      try {
        let res = await fetchData(
          "DELETE",
          `${BACKEND_URL}/api/apis/${apiId}`,
          {},
          authToken,
        );
        if (res.success) {
          toast.success(res.message);
          navigate("/apis");
        } else {
          toast.error(res.errorMessage);
        }
      } catch (err) {
        toast.error("Internal Server Error");
      }
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    if (location.state) {
      setApiName(location.state.apiName);
      setApiDescription(location.state.apiDescription);
      setApiEndpoint(location.state.apiEndpoint);
      setApiId(location.state.apiId);
    } else {
      navigate("/apis");
    }
  }, []);

  return (
    <div className={styles.editApi}>
      <div className={styles.editContainer}>
        <div className={styles.h1}>Contact Us</div>
        <input
          className={styles.inputField}
          type="text"
          placeholder="API Name"
          value={apiName}
          onChange={(e) => setApiName(e.target.value)}
        />
        <input
          className={styles.inputField}
          type="text"
          placeholder="https://exampleurl.com"
          value={apiEndpoint}
          onChange={(e) => setApiEndpoint(e.target.value)}
        />
        <input
          className={styles.inputField}
          type="text"
          style={{ height: "120px" }}
          placeholder="API Description"
          value={apiDescription}
          onChange={(e) => setApiDescription(e.target.value)}
        />
        <div className={styles.editBtn} onClick={handleOnEdit}>
          Submit
        </div>
      </div>
    </div>
  );
};

Contactus.propTypes = {
  toast: PropTypes.func,
};

export default Contactus;