import { Fragment, useState, useContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "./App.scss";
import { StringInputContext } from "./context/stringInputContext";

import Home from "./Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/analyse",
    element: <Home />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);

function App(): JSX.Element {
  const stringValue = useContext(StringInputContext);
  const [strValue, setStrValue] = useState<string>(stringValue);

  return (
    <Fragment>
      <StringInputContext.Provider value={[strValue, setStrValue]}>
        <RouterProvider router={router} />
      </StringInputContext.Provider>
    </Fragment>
  );
}

export default App;
