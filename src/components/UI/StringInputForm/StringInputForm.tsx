import React, { Fragment, useRef, useContext } from "react";
import { StringInputContext } from "../../../context/stringInputContext";
import styles from "./StringInputForm.module.scss";

interface InputProps {
  onSubmit: (boolVal: boolean) => void;
}

const StringInputForm: React.FC<InputProps> = (props): JSX.Element => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [strValue, setStrValue] = useContext<string | any>(StringInputContext);

  const onSubmit = (): void => {
    props.onSubmit(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const inputValue = inputRef.current?.value;
    console.log("input string");
    console.log(inputValue);
    setStrValue(inputValue);
    onSubmit();
  };

  return (
    <Fragment>
      <div className={styles["string-input"]}>
        <form onSubmit={handleSubmit} className={styles["string-input-form"]}>
          <textarea
            className={styles["string-input-form__input"]}
            ref={inputRef}
          />
          <button
            type="submit"
            className={styles["string-input-form__submit-button"]}
          >
            Analyze
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default StringInputForm;
