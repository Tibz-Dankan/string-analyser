import { createContext } from "react";

export interface NotificationInterface {
  showCardNotification: boolean;
  cardNotificationType: string;
  cardMessage: string;
}

const initialState: NotificationInterface = {
  showCardNotification: false,
  cardNotificationType: "",
  cardMessage: "",
};

export const NotificationContext = createContext<NotificationInterface | any>(
  initialState
);

interface Payload {
  type: string;
  message: string;
}

export const showCardNotification = (
  payload: Payload
): NotificationInterface => {
  initialState.showCardNotification = true;
  initialState.cardNotificationType = payload.type;
  initialState.cardMessage = payload.message;
  console.log("show notification");
  console.log(initialState);
  return initialState;
};

export const hideCardNotification = (): NotificationInterface => {
  initialState.showCardNotification = false;
  initialState.cardNotificationType = "";
  initialState.cardMessage = "";
  console.log("hide notification");
  console.log(initialState);
  return initialState;
};
