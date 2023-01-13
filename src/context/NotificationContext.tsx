import { createContext, useContext, useState } from "react";

export interface Notification {
  showCardNotification: boolean;
  cardNotificationType: string;
  cardMessage: string;
}

const initialState: Notification = {
  showCardNotification: false,
  cardNotificationType: "",
  cardMessage: "",
};
interface Payload {
  showCard: boolean;
  type: string;
  message: string;
}

const NotificationContext = createContext<Notification>(initialState);
const UpdateNotificationContext = createContext<(payload: Payload) => void>(
  () => {}
);

export const useNotification = () => {
  return useContext<Notification>(NotificationContext);
};

export const useUpdateNotification = (payload: Payload) => {
  return useContext<(payload: Payload) => void>(UpdateNotificationContext);
};

interface ProviderProps {
  children: JSX.Element;
}

export const NotificationProvider: React.FC<ProviderProps> = (
  props
): JSX.Element => {
  const [notification, setNotification] = useState<Notification>(initialState);

  const showCardNotification = (payload: Payload): void => {
    setNotification({
      showCardNotification: payload.showCard,
      cardNotificationType: payload.type,
      cardMessage: payload.message,
    });
    setTimeout(() => {
      setNotification(initialState);
    }, 5000);
  };

  return (
    <NotificationContext.Provider value={notification}>
      <UpdateNotificationContext.Provider value={showCardNotification}>
        {props.children}
      </UpdateNotificationContext.Provider>
    </NotificationContext.Provider>
  );
};
