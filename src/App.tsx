import {
  createBrowserRouter,
  RouterProvider,
  type RouteObject,
} from "react-router-dom";

import HomePage from "./pages/Home.tsx";
import "./App.css";

const routes: RouteObject[] = [{ path: "/", element: <HomePage /> }];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
