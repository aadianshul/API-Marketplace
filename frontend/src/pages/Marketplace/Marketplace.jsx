import React, { useEffect, useState } from "react";
import styles from "./Marketplace.module.scss";
import PropTypes from "prop-types";

import { ApiCard, Banner } from "../../components";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Marketplace = ({ toast }) => {
  const [allApis, setAllApis] = useState([]);

  useEffect(async () => {
    try {
      let res = await fetch(`${BACKEND_URL}/api/apis/all`, {
        method: "GET",
      });

      if (!res.ok) {
        res = await res.json();
      } else {
        res = await res.json();
        setAllApis([...res.apis]);
      }
    } catch (err) {
      toast.error("Internal Server Error");
    }
  }, []);

  return (
    <div className={styles.body}>
      <div className={styles.cards}>
        <div className={styles.cardsHeading}>All APIs</div>
        {allApis.length !== 0 ? (
          <div className={styles.cardsList}>
            {allApis.map((elem, idx) => {
              return (
                <ApiCard
                  key={idx}
                  apiName={elem.name}
                  apiDescription={elem.description}
                  apiEndpoint={elem.endpoint}
                  apiId={elem._id}
                />
              );
            })}
          </div>
        ) : (
          <div className={styles.secondaryText}>
            No Published APIs available
          </div>
        )}
      </div>
    </div>
  );
};

Marketplace.propTypes = {
  toast: PropTypes.func,
};

export default Marketplace;
