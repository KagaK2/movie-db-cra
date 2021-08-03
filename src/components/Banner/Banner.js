import { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { ConfigStore } from "../../stores/ConfigStore/ConfigStore";
import styles from './Banner.module.scss';

const Banner = (props) => {
  const [current, setCurrent] = useState(0);
  const backDropSizes = ConfigStore.sizes("backdrop_sizes");
  const baseUrl = ConfigStore.baseUrl;
  const secureBaseUrl = ConfigStore.secureBaseUrl;

  return (
    <div className={styles.banner__container}>
      <div className={styles.banner__imageContainer}>
        <img
          src={`${baseUrl}${backDropSizes[3]}${props.movies[current] ? props.movies[current].backdrop_path : ""}`}
          alt="current trending"
          className={styles.banner__image}
          width="100%"
          height="auto"
        />
      </div>
      <div className={styles.banner__switchList}>
        <div onClick={() => setCurrent(0)}>O</div>
        <div onClick={() => setCurrent(1)}>O</div>
        <div onClick={() => setCurrent(2)}>O</div>
      </div>
    </div>
  );
};

export default observer(Banner);
