import { Fragment, useState, useContext, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./App.scss";
import { StringInputContext } from "./context/stringInputContext";

import Home from "./Pages/Home/Home";
import Notification from "./components/UI/Notification/Notification";
import { useNotification } from "./context/NotificationContext";
import { useUpdateNotification } from "./context/NotificationContext";

function App(): JSX.Element {
  const stringValue = useContext(StringInputContext);
  const [strValue, setStrValue] = useState<string>(stringValue);
  const notification = useNotification();
  const updateNotification = useUpdateNotification({
    showCard: false,
    type: "",
    message: "",
  });

  const closeCardHandler = (): void => {
    updateNotification({
      showCard: false,
      type: "",
      message: "",
    });
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          {notification.showCardNotification && (
            <Notification
              type={notification.cardNotificationType}
              message={notification.cardMessage}
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
          {notification.showCardNotification && (
            <Notification
              type={notification.cardNotificationType}
              message={notification.cardMessage}
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
          {notification.showCardNotification && (
            <Notification
              type={notification.cardNotificationType}
              message={notification.cardMessage}
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
        <RouterProvider router={router} />
      </StringInputContext.Provider>
    </Fragment>
  );
}

export default App;
