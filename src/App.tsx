import { Fragment, useState, useContext, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./App.scss";

import Home from "./Pages/Home/Home";
import Notification from "./components/UI/Notification/Notification";
import { useNotification } from "./context/NotificationContext";
import { useUpdateNotification } from "./context/NotificationContext";

function App(): JSX.Element {
  console.log("app actions being tested");
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
      <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;
