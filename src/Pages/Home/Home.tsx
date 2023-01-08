import React, { Fragment } from "react";
import StringManipulate from "../../components/UI/StringManipulate/StringManipulate";
import styles from "./Home.module.scss";

const Home: React.FC = (): JSX.Element => {
  return (
    <Fragment>
      <div className={styles["home"]}>
        <header className={styles["home__header"]}>
          <span> STRING-ANALYSER</span>
        </header>
        <main>
          <StringManipulate />
        </main>
        <footer>
          <div className={styles["home__copyright"]}>
            STRING-ANALYSER &copy; {new Date().getFullYear()}
          </div>
        </footer>
      </div>
    </Fragment>
  );
};

export default Home;
