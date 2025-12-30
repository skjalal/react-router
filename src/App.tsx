import {
  createBrowserRouter,
  RouterProvider,
  type DataRouter,
  type RouteObject,
} from "react-router-dom";

import HomePage from "./pages/Home.tsx";
import ProductsPage from "./pages/Product.tsx";
import "./App.css";

const routes: RouteObject[] = [
  { path: "/", element: <HomePage /> },
  { path: "/products", element: <ProductsPage /> },
];

const router: DataRouter = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
