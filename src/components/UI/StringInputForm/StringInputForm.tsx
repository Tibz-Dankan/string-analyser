import React, {
  Fragment,
  useRef,
  useContext,
  useState,
  useEffect,
} from "react";
import { StringInputContext } from "../../../context/stringInputContext";
import { showCardNotification } from "../../../context/notification";
import { hideCardNotification } from "../../../context/notification";
import { NotificationContext } from "../../../context/notification";
// import { NotificationInterface } from "../../../context/notification";
import styles from "./StringInputForm.module.scss";

interface InputProps {
  onSubmit: (boolVal: boolean) => boolean;
}

const StringInputForm: React.FC<InputProps> = (props): JSX.Element => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [strValue, setStrValue] = useContext<string | any>(StringInputContext);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [notification, setNotification] = useContext(NotificationContext);

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
    const showCard = showCardNotification({
      type: "success",
      message: "Analysis results updated",
    });
    setNotification(showCard);

    setTimeout(() => {
      const hideCard = hideCardNotification();
      setNotification(hideCard);
    }, 5000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const inputValue = inputRef.current?.value;
    setStrValue(inputValue);
    onSubmit();
    showCardHandler();
  };

  // useEffect(() => {
  //   const showCardHandler = (): void => {
  //     if (isSubmitted) {
  //       const showCard = showCardNotification({
  //         type: "success",
  //         message: "Analysis complete, please check results",
  //       });
  //       setNotification(showCard);
  //     }
  //     setTimeout(() => {
  //       const hideCard = hideCardNotification();
  //       setNotification(hideCard);
  //     }, 5000);
  //   };
  //   showCardHandler();
  // }, [isSubmitted]);

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
