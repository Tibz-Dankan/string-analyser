import { Fragment, useContext, useEffect, useState } from "react";
import StringInputForm from "../StringInputForm/StringInputForm";
import AnalysisResults from "../AnalysisResults/AnalysisResults";
import {
  stringAnalysis,
  AnalysisInterface,
} from "../../../utils/stringAnalysis";
import { useString } from "../../../context/StringContext";
import styles from "./StringManipulate.module.scss";

const initialObj: AnalysisInterface = {
  letters: 0,
  numbers: 0,
  words: 0,
  symbols: 0,
  spaces: 0,
  totalCharacters: 0,
};

const StringManipulate: React.FC = (): JSX.Element => {
  const str: any = useString();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [analysis, setAnalysis] = useState<AnalysisInterface>(initialObj);

  const onSubmitHandler = (boolVal: boolean): boolean => {
    setIsSubmitted(boolVal);
    return boolVal;
  };

  useEffect(() => {
    if (str === null || str === undefined) return;
    const strAnalyzed = stringAnalysis(str);
    setAnalysis(strAnalyzed);
  }, [isSubmitted]);

  return (
    <Fragment>
      <div className={styles["string-manipulate"]}>
        <StringInputForm onSubmit={onSubmitHandler} />
        <AnalysisResults
          letters={analysis.letters}
          numbers={analysis.numbers}
          words={analysis.words}
          symbols={analysis.symbols}
          spaces={analysis.spaces}
          totalCharacters={analysis.totalCharacters}
        />
      </div>
    </Fragment>
  );
};

export default StringManipulate;
