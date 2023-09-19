import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import Clase1 from "./components/clases/Clase1.tsx";
import Clase9 from "./components/clases/Clase9.tsx";
import Home from "./components/Home.tsx";

import { loaderClase9 } from "./components/clases/Clase9.tsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: "/clase1",
        element: <Clase1/>
      },
      {
        path: "/clase9/:page",
        loader: loaderClase9,
        element: <Clase9/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
)
