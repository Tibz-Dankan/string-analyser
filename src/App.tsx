import { Fragment, useState, useContext, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./App.scss";
import { StringInputContext } from "./context/stringInputContext";
import { NotificationContext } from "./context/notification";
import { NotificationInterface } from "./context/notification";
import { hideCardNotification } from "./context/notification";
import Home from "./Pages/Home/Home";
import Notification from "./components/UI/Notification/Notification";

function App(): JSX.Element {
  const stringValue = useContext(StringInputContext);
  const [strValue, setStrValue] = useState<string>(stringValue);
  const notificationValue: NotificationInterface =
    useContext(NotificationContext);
  const [notification, setNotification] =
    useState<NotificationInterface>(notificationValue);

  const showCard: boolean = notificationValue.showCardNotification;
  console.log("showCard");
  console.log(showCard);
  const [showCardNotification, setShowCardNotification] =
    useState<boolean>(showCard);

  const closeCardHandler = (): void => {
    // hideCardNotification();
    setShowCardNotification(true);
  };

  // Hide notification card
  useEffect(() => {
    if (showCardNotification) {
      setTimeout(() => {
        setShowCardNotification(false);
      }, 5000);
    }
  }, [showCardNotification, setShowCardNotification]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          {/* {notificationValue.showCardNotification && ( */}
          {showCardNotification && (
            <Notification
              type={notificationValue.cardNotificationType}
              message={notificationValue.cardMessage}
              onClose={closeCardHandler}
            />
          )}
          <Home />
        </div>
      ),
    },
    {
      path: "/home",
      element: (
        <div>
          {/* {notificationValue.showCardNotification && ( */}
          {showCardNotification && (
            <Notification
              type={notificationValue.cardNotificationType}
              message={notificationValue.cardMessage}
              onClose={closeCardHandler}
            />
          )}
          <Home />
        </div>
      ),
    },
    {
      path: "/analyse",
      element: (
        <div>
          {/* {notificationValue.showCardNotification && ( */}
          {showCardNotification && (
            <Notification
              type={notificationValue.cardNotificationType}
              message={notificationValue.cardMessage}
              onClose={closeCardHandler}
            />
          )}
          <Home />
        </div>
      ),
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);

  return (
    <Fragment>
      <StringInputContext.Provider value={[strValue, setStrValue]}>
        <NotificationContext.Provider value={[notification, setNotification]}>
          <RouterProvider router={router} />
        </NotificationContext.Provider>
      </StringInputContext.Provider>
    </Fragment>
  );
}

export default App;
