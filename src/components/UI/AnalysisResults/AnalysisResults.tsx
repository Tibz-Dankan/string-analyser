import React, { Fragment } from "react";
import styles from "./AnalysisResults.module.scss";

interface AnalysisResultsProps {
  letters: number;
  numbers: number;
  words: number;
  symbols: number;
  spaces: number;
  totalCharacters: number;
}

const AnalysisResults: React.FC<AnalysisResultsProps> = (
  props
): JSX.Element => {
  return (
    <Fragment>
      <div className={styles["analysis-results"]}>
        <table className={styles["results-table"]}>
          <caption className={styles["results-table__caption"]}>
            Results
          </caption>
          <thead>
            <tr className={styles["results-table__row"]}>
              <th className={styles["results-table__header-cell"]}>
                Character Type
              </th>
              <th className={styles["results-table__header-cell"]}>Number</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles["results-table__row"]}>
              <td className={styles["results-table__cell"]}>
                Alphabetic Characters
              </td>
              <td className={styles["results-table__cell"]}>{props.letters}</td>
            </tr>
            <tr className={styles["results-table__row"]}>
              <td className={styles["results-table__cell"]}>
                Numeric Characters
              </td>
              <td className={styles["results-table__cell"]}>{props.numbers}</td>
            </tr>
            <tr className={styles["results-table__row"]}>
              <td className={styles["results-table__cell"]}>Words</td>
              <td className={styles["results-table__cell"]}>{props.words}</td>
            </tr>
            <tr className={styles["results-table__row"]}>
              <td className={styles["results-table__cell"]}>
                Symbolic Characters
              </td>
              <td className={styles["results-table__cell"]}>{props.symbols}</td>
            </tr>
            <tr className={styles["results-table__row"]}>
              <td className={styles["results-table__cell"]}>
                Space Characters
              </td>
              <td className={styles["results-table__cell"]}>{props.spaces}</td>
            </tr>
            <tr className={styles["results-table__row"]}>
              <td className={styles["results-table__cell"]}>
                Total Characters
              </td>
              <td
                className={styles["results-table__cell"]}
                id={styles["total-char-value"]}
              >
                {props.totalCharacters}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default AnalysisResults;
