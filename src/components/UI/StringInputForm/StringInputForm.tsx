import React, { Fragment, useRef, useContext, useState } from "react";
import { StringInputContext } from "../../../context/stringInputContext";
import styles from "./StringInputForm.module.scss";

interface InputProps {
  onSubmit: (boolVal: boolean) => void;
}

const StringInputForm: React.FC<InputProps> = (props): JSX.Element => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [strValue, setStrValue] = useContext<string | any>(StringInputContext);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const onSubmit = (): void => {
    switch (isSubmitted) {
      case true:
        props.onSubmit(false);
        setIsSubmitted(!isSubmitted);
        break;
      case false:
        props.onSubmit(true);
        setIsSubmitted(!isSubmitted);
        break;
      default:
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const inputValue = inputRef.current?.value;
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
            placeholder="Enter sentence(s) or a word or symbols(s) etc ..."
            required
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
