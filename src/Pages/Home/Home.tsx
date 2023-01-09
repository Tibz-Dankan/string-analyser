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
          <section className={styles["home__about-description"]}>
            <p>
              STRING-ANALYSER is an application that counts characters in a
              given string of text. It analyzes the text for alphabetic,
              numeric, and symbolic characters and displays the results in a
              table. The table also includes the number of words and the total
              number of characters in the text.
            </p>
          </section>
          <section className={styles["home__string-manipulate"]}>
            <StringManipulate />
          </section>
        </main>
        <footer>
          <div className={styles["home__copyright"]}>
            STRING-ANALYSER &copy; {new Date().getFullYear()}. All rights
            reserved
          </div>
        </footer>
      </div>
    </Fragment>
  );
};

export default Home;
