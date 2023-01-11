import React from "react";
import styles from "./Card.module.scss";

interface CardProps {
  styles: string;
  children: JSX.Element;
}

const Card: React.FC<CardProps> = (props): JSX.Element => {
  return (
    <div className={`${styles["card"]} ${props.styles}`}>{props.children}</div>
  );
};

export default Card;
