import React, { Fragment, useRef, useContext, useState } from "react";
import { useUpdateNotification } from "../../../context/NotificationContext";
import { useUpdateString } from "../../../context/StringContext";
import styles from "./StringInputForm.module.scss";

interface InputProps {
  onSubmit: (boolVal: boolean) => boolean;
}

const StringInputForm: React.FC<InputProps> = (props): JSX.Element => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const updateString = useUpdateString("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const updateNotification = useUpdateNotification({
    showCard: false,
    type: "",
    message: "",
  });

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

  const showCardHandler = (): void => {
    updateNotification({
      showCard: true,
      type: "success",
      message: "Results updated",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const strVal = inputRef.current?.value;
    updateString(strVal);
    onSubmit();
    showCardHandler();
  };

  return (
    <Fragment>
      <div className={styles["string-input"]}>
        <form onSubmit={handleSubmit} className={styles["string-input-form"]}>
          <textarea
            className={styles["string-input-form__input"]}
            ref={inputRef}
            placeholder="Enter text here for analysis"
            required
          />
          <button
            type="submit"
            className={styles["string-input-form__submit-button"]}
          >
            SUBMIT
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default StringInputForm;
